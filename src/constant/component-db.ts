export interface ComponentManifestJson {
  name: string;
  dependencies: string[];
  registryDependencies: string[];
  files: { path: string; content: string }[];
  type: string;
}

export const COMPONENTS_DB: {
  [component_category: string]: {
    [component_slug: string]: ComponentManifestJson;
  };
} = {
  test: {
    "test-1": {
      name: "test",
      dependencies: ["button"],
      registryDependencies: [],
      files: [
        {
          path: `components/unknownbug-ui/test.tsx`,
          content: `import { Button } from "@/components/ui/button";

                    export default function Test() {
                      return <Button>Hello Test</Button>;
                    }
`,
        },
      ],
      type: "registry:ui",
    },
  },
};
