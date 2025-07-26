import { COMPONENTS_METADATA } from "@/constant/components-meta";
import Link from "next/link";
import React from "react";

const ComponentsPage = () => {
  const categories = Object.keys(COMPONENTS_METADATA);

  return (
    <div className="w-full max-w-[1000px] flex items-center flex-col">
      <h1 className="text-4xl font-bold text-center w-full py-[16vh] border-b">
        Components
      </h1>
      <div className="w-full flex flex-wrap justify-around">
        {categories?.map((category) => {
          return (
            <Link href={`/components/${category}`} className="min-w-64 w-full border-r border-b h-48 flex items-center justify-center" key={category}>
              <p className="uppercase text-2xl font-bold">{category}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ComponentsPage;
