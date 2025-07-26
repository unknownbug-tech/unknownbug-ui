"use client";
import { copyCode } from "@/hooks/copy-code";
import { cn } from "@/lib/utils";
import { Clipboard } from "lucide-react";
import React, { useEffect, useState } from "react";

const getCliCommand = (
  provider: string,
  identifier: string,
  isNpxType: boolean
) => {
  switch (provider) {
    case "npm":
      return isNpxType
        ? `npx shadcn@latest add ${identifier}`
        : `npm i ${identifier}`;
    case "pnpm":
      return isNpxType
        ? `pnpm dlx shadcn@latest add ${identifier}`
        : `pnpm add ${identifier}`;
    case "yarn":
      return isNpxType
        ? `yarn dlx shadcn@latest add ${identifier}`
        : `yarn add ${identifier}`;
    case "bun":
      return isNpxType
        ? `bunx shadcn@latest add ${identifier}`
        : `bun add ${identifier}`;
    default:
      return "";
  }
};

const CliGuide = ({
  identifier,
  isNpxType,
  activeTab,
  setActiveTab,
}: {
  identifier: string;
  isNpxType: boolean;
  activeTab: string;
  setActiveTab: (val: string) => void;
}) => {
  // const [activeTab, setActiveTab] = useState<string>("npm");
  const packageProviders = ["npm", "pnpm", "yarn", "bun"];
  const [cliCommand, setCliCommand] = useState<string>(
    getCliCommand(activeTab, identifier, isNpxType)
  );

  useEffect(() => {
    setCliCommand(getCliCommand(activeTab, identifier, isNpxType));
  }, [activeTab]);
  return (
    // Added overflow-hidden to ensure rounded corners clip content
    <span className="bg-black w-full rounded-md mb-4 flex flex-col gap-2 overflow-hidden max-w-[460px] mt-4">
      <span className="flex items-center justify-between px-4">
        <span className="flex gap-4 text-sm rounded-t-lg">
          {packageProviders?.map((provider) => (
            <span
              key={provider}
              className={cn(
                "py-2 transition-all duration-200 cursor-pointer",
                activeTab === provider
                  ? "text-white border-b border-b-white"
                  : "text-gray-500"
              )}
              onClick={() => {
                setActiveTab(provider);
              }}
            >
              {provider}
            </span>
          ))}
        </span>
        <Clipboard
          className="size-4 text-gray-500 cursor-pointer"
          onClick={() => {
            copyCode(cliCommand);
          }}
        />
      </span>
      <code
        className="p-4 text-sm italic text-gray-300 whitespace-nowrap block overflow-x-auto min-w-0"
        style={{
          scrollbarColor: "gray transparent",
          scrollbarWidth: "thin",
        }}
      >
        {cliCommand}
      </code>
    </span>
  );
};

export default CliGuide;
