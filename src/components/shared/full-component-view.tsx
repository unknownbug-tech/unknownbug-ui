import { JSX } from "react";
import CliGuide from "./cli-guide";
import ComponentInstallationGuide from "./component-installation-guide";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  componentUrl: string;
  entity: {
    name: string;
    newPackages: string;
    description: string;
    item: () => JSX.Element;
  };
}
const FullComponentView = ({
  componentUrl,
  entity: { name, newPackages, description, item },
}: Props) => {
  const Item = item;

  if (!Item) return null;

  return (
    <div className="w-full flex flex-col items-start gap-4 h-[800px]">
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
      <p className="text-muted-foreground italic">{description}</p>

      <Item />
    </div>
  );
};

export default FullComponentView;
