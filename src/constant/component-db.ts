import { authPage } from "./components-content/auth-page";
import { docsPage } from "./components-content/docs-page";
import { markdownRenderer } from "./components-content/markdwon-renderer";

export interface ComponentManifestJson {
  name: string;
  dependencies: string[];
  registryDependencies: string[];
  files: {
    type: string;
    path: string;
    content: string;
  }[];
  type: string;
}

export const COMPONENTS_DB: {
  [component_category: string]: {
    [component_slug: string]: ComponentManifestJson;
  };
} = {
  Pages: {
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
    },
    "docs-page-1": {
      name: "Documentation Page",
      dependencies: ["resizable", "input", "tabs", "label"],
      registryDependencies: [
        "https://ui.unknownbug.tech/api/components/Code/markdown-renderer-1",
      ],
      files: [
        {
          type: "registry:component",
          path: `components/unknownbug-ui/pages/documentation-page.tsx`,
          content: docsPage,
        },
      ],
      type: "registry:component",
    },
  },
  Code: {
    "markdown-renderer-1": {
      name: "Markdown Renderer",
      dependencies: ["button", "badge"],
      registryDependencies: [],
      files: [
        {
          type: "registry:component",
          path: `components/unknownbug-ui/comp/markdown-renderer.tsx`,
          content: markdownRenderer,
        },
      ],
      type: "registry:component",
    },
  },
};
