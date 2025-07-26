import FullComponentView from "@/components/shared/full-component-view";
import { COMPONENTS_METADATA } from "@/constant/components-meta";
// import { useParams } from "next/navigation";
import React from "react";

const CategoryWiseComponent = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  const components = COMPONENTS_METADATA[category];
  console.log(
    "components",
    category,
    COMPONENTS_METADATA,
    COMPONENTS_METADATA[category]
  );
  return (
    <div className="w-full flex flex-col items-center pb-32">
      <h1 className="py-[8vh] text-3xl font-bold uppercase">{category}</h1>

      {components && (
        <div className=" w-full max-w-[1000px] ">
          {Object.entries(components)?.map(([slug, component]) => {
            const componentUrl = `https://ui.unknownbug.tech/api/components/${category}/${slug}`;
            return (
              <FullComponentView
                key={componentUrl}
                componentUrl={componentUrl}
                entity={component}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategoryWiseComponent;
