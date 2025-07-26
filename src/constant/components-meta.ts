import { AuthPage } from "@/components/unknownbug-ui/pages/auth-page";
import { authPage } from "./components-content/auth-page";
import { JSX } from "react";

export interface ComponentManifestJson {
  name: string;
  dependencies: string[];
  registryDependencies: string[];
  files: {
    type: string;
    path: string;
    content: string;
  }[];
  additional: {
    [key: string]: string;
  };
  type: string;
}

export const COMPONENTS_METADATA: {
  [component_category: string]: {
    [slug: string]: {
      name: string;
      newPackages: string;
      description: string;
      item: () => JSX.Element;
    };
  };
} = {
  pages: {
    "auth-page-1": {
      name: "auth-page-1",
      newPackages: "zod^4;react-hook-form^7.61.1",
      description: "it's an auth page",
      item: AuthPage,
    },
  },
};
