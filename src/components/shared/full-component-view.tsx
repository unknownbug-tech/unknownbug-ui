import React, { JSX } from "react";
import ComponentInstallationGuide from "./component-installation-guide";
import Link from "next/link";
import MarkdownRenderer from "../unknownbug-ui/comp/markdown-renderer";

interface Props {
  componentUrl: string;
  entity: {
    name: string;
    newPackages: string;
    description: string;
    item: React.ComponentType;
  };
}
const FullComponentView = ({
  componentUrl,
  entity: { name, newPackages, description, item },
}: Props) => {
  const Item = item;

  if (!Item) return null;

  return (
    <div className="w-full flex flex-col items-start gap-4 h-[800px] border-t pt-8">
      <span className="flex items-center justify-between w-full">
        <h2 className="text-xl font-bold uppercase">{name}</h2>
        <span className="items-center flex gap-2">
          <Link
            href={`https://v0.dev/chat/api/open?url=${componentUrl}`}
            target="_blank"
            className=""
          >
            {"v0"}
          </Link>
          <ComponentInstallationGuide
            newPackages={newPackages || ""}
            componentUrl={componentUrl}
          />
        </span>
      </span>

      <MarkdownRenderer markdown={description} />

      <Item />
    </div>
  );
};

export default FullComponentView;
