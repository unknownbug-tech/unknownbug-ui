import { DocumentationPage } from "@/components/comp-1";
import MarkdownRenderer from "@/components/experiment";
import { AuthPage } from "@/components/unknownbug-ui/pages/auth-page";
import React from "react";

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
      item: React.ComponentType;
    };
  };
} = {
  Pages: {
    "auth-page-1": {
      name: "Auth Page",
      newPackages: "zod^4;react-hook-form^7.61.1",
      description: "it's an auth page",
      item: AuthPage,
    },
    "docs-page-1": {
      name: "Documentation Page",
      newPackages:
        "zustand;remark-gfm;rehype-raw;react-syntax-highlighter;react-markdown",
      description: `it's an documentation page with proper markdown rendering for your SaaS 
\nmake sure \nyou have \`@tailwindcss/typography\` plugin  
installed in your tailwindcss

For \`tailwindcss v4\`
> Install it in \`global.css\` or \`index.css\`

For \`tailwindcss v3\`
> Install it in \`tailwindcss.config.js.css\` 
`,
      item: DocumentationPage,
    },
  },
  Code: {
    "markdown-renderer-1": {
      name: "Markdown Renderer",
      newPackages:
        "remark-gfm;rehype-raw;react-syntax-highlighter;react-markdown",
      description:
        "this component is Powerful markdown code renderer \n\nMake sure \nyou have `@tailwindcss/typography` plugin \n\n#### For `tailwindcss v4`\n> Install it in `global.css` or `index.css`\n\n#### For `tailwindcss v3`\n> Install it in `tailwindcss.config.js.css\n### Output of small markdown code is given below ",
      item: MarkdownRenderer,
    },
  },
};
