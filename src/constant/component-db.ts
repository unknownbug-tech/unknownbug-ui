import { authPage } from "./components-content/auth-page";

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

export const COMPONENTS_DB: {
  [component_category: string]: {
    [component_slug: string]: ComponentManifestJson;
  };
} = {
  pages: {
    "auth-page-1": {
      name: "auth-page-1",
      dependencies: ["button", "input", "tabs", "label"],
      registryDependencies: [],
      files: [
        {
          type: "registry:component",
          path: `components/unknownbug-ui/pages/auth-page.tsx`,
          content: authPage,
        },
      ],
      type: "registry:component",
      additional: {
        newPackages:"zod;react-hook-form",
        description:"it's an auth page"
      },
    },
  },
};
