import { COMPONENTS_DB } from "@/constant/component-db";
import {  NextRequest, NextResponse } from "next/server";

export async function GET(
  _req:NextRequest,
  {
    params,
  }: {
    params: Promise<{ component_category: string; component_slug: string }>;
  }
) {
  const { component_category, component_slug } = await params;

  if (component_category in COMPONENTS_DB) {
    if (component_slug in COMPONENTS_DB[component_category]) {
      const { name, dependencies, registryDependencies, files, type } =
        COMPONENTS_DB[component_category][component_slug];

      return NextResponse.json({
        name,
        dependencies,
        registryDependencies,
        files,
        type,
      });
    }
  }

  return new NextResponse("Component not found", { status: 404 });
}
