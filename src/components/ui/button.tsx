import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { Slot } from "radix-ui";

const buttonVariants = cva(
  // 6px radius, 500 weight, 150ms on colour only. The focus ring is the
  // project's own: 2px --green-900 at 2px offset, never removed.
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-none border border-transparent font-medium whitespace-nowrap outline-none select-none transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-green-700",
        secondary:
          "border-green-900 bg-transparent text-green-900 hover:bg-green-50",
        ghost: "bg-transparent text-ink hover:underline",
      },
      size: {
        sm: "px-4.5 py-2.5 text-sm",
        md: "px-5.5 py-3 text-[15px]",
        lg: "px-7 py-4 text-base",
        icon: "size-9 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  /** Render the child element instead of a <button> — navigations stay <a>. */
  asChild?: boolean;
}

function Button({
  className,
  variant = "primary",
  size = "md",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
export type { ButtonProps };
