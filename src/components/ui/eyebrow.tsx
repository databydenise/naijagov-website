import * as React from "react";
import { cn } from "cn";

interface EyebrowProps extends React.ComponentProps<"p"> {
  /** Render as a different element where the section already has a heading. */
  as?: React.ElementType;
}

/**
 * The small uppercase label above a section heading. Size, weight, and the
 * 0.12em tracking come from the `--text-eyebrow` token, so this never restates
 * them — see the @theme block in globals.css.
 */
function Eyebrow({ as: Comp = "p", className, ...props }: EyebrowProps) {
  return (
    <Comp
      data-slot="eyebrow"
      className={cn(
        "text-eyebrow tracking-wider text-ink-muted uppercase font-medium",
        className
      )}
      {...props}
    />
  );
}

export { Eyebrow };
export type { EyebrowProps };
