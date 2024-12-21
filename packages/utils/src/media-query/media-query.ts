import { mediaQueryBreakpoint } from "../media-query-breakpoint/media-query-breakpoint";

export const mediaQuery = {
  "xs": `(min-width: ${mediaQueryBreakpoint.xs}px)`,
  "sm": `(min-width: ${mediaQueryBreakpoint.sm}px)`,
  "md": `(min-width: ${mediaQueryBreakpoint.md}px)`,
  "lg": `(min-width: ${mediaQueryBreakpoint.lg}px)`,
  "xl": `(min-width: ${mediaQueryBreakpoint.xl}px)`,
  "2xl": `(min-width: ${mediaQueryBreakpoint["2xl"]}px)`,
};
