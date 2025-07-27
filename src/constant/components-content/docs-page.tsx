export const docsPage: string = `"use client";
"use client";
import React, { useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";
import { create } from "zustand";
import { cn } from "@/lib/utils";
import { markdownCode } from "@/constant/markdowncode";
import MarkdownRenderer from "@/components/unknownbug-ui/comp/markdown-renderer";

interface PageStore {
  title: string;
  setTitle: (title: string) => void;
}

const usePageStore = create<PageStore>((set) => ({
  title: "",
  setTitle: (title) => set({ title }),
}));

interface SectionWisePageTitlesType {
  title: string;
  children?: SectionWisePageTitlesType[];
}
interface PageContentMapType {
  [title: string]: string;
}
const PAGE_CONTENT: PageContentMapType = {
  "Get Started": "## Hello World",
  "Page 1": "## Hello World 2",
  "Page 2": "## Hello galaxy 1",
  "Page 3": "## Hello galaxy 2",
  "Page 4": "## Hello galaxy 3",
  "Page 5": "## Hello World 2",
  "Page 6": "## Hello galaxy 1",
  "Page 7": "## Hello galaxy 2",
  "Page 8": "## Hello galaxy 3",
};

const SECTION_WISE_PAGE_TITLE: SectionWisePageTitlesType[] = [
  {
    title: "Get Started",
  },
  {
    title: "Section 2",
    children: [
      {
        title: "Page 1",
      },
      {
        title: "Page 2",
      },
      {
        title: "Page 3",
      },
    ],
  },
  {
    title: "Section 3",
    children: [
      {
        title: "Page 4",
      },
      {
        title: "Page 5",
        children: [
          {
            title: "Page 6",
          },
          {
            title: "Page 7",
          },
          {
            title: "Page 8",
          },
        ],
      },
    ],
  },
];

const RenderNestedChildren = ({
  title,
  children = [],
}: {
  title: string;
  children?: SectionWisePageTitlesType[];
}) => {
  const [showChildren, setShowChildren] = useState<boolean>(true);
  const { title: activePageTitle, setTitle } = usePageStore();

  return (
    <div className={cn("pb-2", children && children.length > 0 && "border-b")}>
      <span
        className={cn(
          "flex items-center justify-between gap-2 cursor-pointer peer text-muted-foreground hover:text-primary  font-bold text-lg bg-card hover:bg-muted-foreground/50 px-2 py-1 rounded-md",
          activePageTitle == title && "text-primary"
        )}
        onClick={() => {
          console.log("Hello");
          if (children && children.length > 0) {
            setShowChildren((prev) => !prev);
          } else {
            setTitle(title);
            console.log("title : ", title);
          }
        }}
      >
        <p>{title}</p>
        {children && children.length > 0 && (
          <ChevronDownIcon
            className={cn(
              "size-6 transition-all duration-200",
              showChildren && "rotate-180"
            )}
          />
        )}
      </span>
      {children &&
        children.length > 0 &&
        showChildren &&
        children.map(({ title, children }) => (
          <div className="flex flex-col gap-3 pl-4 mt-4" key={title}>
            <RenderNestedChildren title={title}>
              {children}
            </RenderNestedChildren>
          </div>
        ))}
    </div>
  );
};

export const DocumentationPage = ({
  pageContent = PAGE_CONTENT,
  sectionWisePageTitle = SECTION_WISE_PAGE_TITLE,
}: {
  pageContent?: PageContentMapType;
  sectionWisePageTitle?: SectionWisePageTitlesType[];
}) => {
  const { title, setTitle } = usePageStore();

  useEffect(() => {
    if (!title) {
      setTitle(Object.keys(pageContent)[0]);
    }
  }, [title]);

  return (
    <div className="h-full flex w-full">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          defaultSize={20}
          maxSize={30}
          minSize={15}
          className="bg-card"
        >
          <div className="p-4 flex items-center gap-2">
            <Image
              src={"https://ui.unknownbug.tech/vercel.svg"}
              width={80}
              height={80}
              alt="logo"
              className="size-8"
            />
            <h1 className="text-xl font-bold">UnknownbugUI</h1>
          </div>
          <hr />
          <div className="flex flex-col gap-3 px-4 mt-4">
            {sectionWisePageTitle?.map((section) => {
              return (
                <RenderNestedChildren
                  title={section.title}
                  key={section?.title}
                >
                  {section?.children ?? []}
                </RenderNestedChildren>
              );
            })}
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel
          defaultSize={80}
          minSize={70}
          maxSize={85}
          className="flex flex-col h-full"
        >
          <h3 className="text-xl py-4 px-2 font-bold border-b bg-card prose prose-invert max-w-none">
            {title || "Loading..."}
          </h3>
          <div className="p-4 h-full overflow-auto">
            <MarkdownRenderer
              markdown={pageContent[title] +" \\n \\n"+ markdownCode || "Loading..."}
            />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
`;
