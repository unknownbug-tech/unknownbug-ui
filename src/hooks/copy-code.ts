import { toast } from "sonner";

export const copyCode = (code: string) => {
  window.navigator.clipboard.writeText(code);
  toast.success("Code copied successfully");
};
