"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CodeIcon } from "lucide-react";
import CliGuide from "./cli-guide";
interface Props {
  newPackages?: string;
  componentUrl: string;
}
const ComponentInstallationGuide = ({
  componentUrl,
  newPackages = "",
}: Props) => {
  const [activeTab, setActiveTab] = useState<string>("npm");
  return (
    <Dialog>
      <DialogTrigger>
        <CodeIcon className="text-gray-500 size-5 cursor-pointer hover:text-white transition-all duration-200" />
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>For this component you have to run commands</DialogTitle>
          <DialogDescription className="block">
            {newPackages && (
              <CliGuide
                identifier={newPackages?.split(";").join(" ")}
                isNpxType={false}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            )}
            <CliGuide
              identifier={componentUrl}
              isNpxType={true}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ComponentInstallationGuide;
