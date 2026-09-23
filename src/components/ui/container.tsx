import * as React from "react";
import { cn } from "cn";

interface ContainerProps extends React.ComponentProps<"div"> {
  /** Render as a different element — `main`, `section`, `nav`… */
  as?: React.ElementType;
}

/** The 1200px content column: 24px gutters, 16px below 600px. */
function Container({ as: Comp = "div", className, ...props }: ContainerProps) {
  return (
    <Comp
      data-slot="container"
      className={cn("mx-auto w-full max-w-300 px-4 narrow:px-6", className)}
      {...props}
    />
  );
}

export { Container };
export type { ContainerProps };
