import type { IsVisibleProps } from "@/components/types.ts";

export const IsVisible = ({ children, isVisible }: IsVisibleProps) => {
  return isVisible ? children : null;
};
