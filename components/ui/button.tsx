import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive uppercase tracking-wide",
  {
    variants: {
      variant: {
        locked:
          "bg-neutral text-primary-foreground hover:bg-neutral-200/90 border-neutral-400 border-b-4 active:border-0",
        default:
          "bg-white text-gray-600 border-slate-200 border-2 border-b-[4px] active:border-b-2 hover:bg-slate-100 hover:text-slate-600",
        primary:
          "bg-lime-600 text-primary-foreground hover:bg-lime-600/90 border-lime-700/80 border-b-4 active:border-b-0",
        primaryOutline: "bg-white text-lime-500 hover:bg-slate-100",
        secondary:
          "bg-amber-500 text-primary-foreground hover:bg-amber-500/90 border-amber-600 border-b-4 active:border-b-0",
        secondaryOutline: "bg-white text-amber-600 hover:bg-slate-100",
        danger:
          "bg-rose-500 text-primary-foreground hover:bg-rose-500/90 border-rose-600 border-b-4 active:border-b-0",
        dangerOutline: "bg-white text-rose-500 hover:bg-slate-100",
        ghost:
          "bg-transparent text-slate-500 border-transparent border-0 hover:bg-slate-100",
        sidebar:
          "bg-transparent text-slate-500 border-2 border-transparent hover:bg-slate-100 transition-none",
        sidebarOutline:
          "bg-lime-600/15 text-lime-600 border-lime-500 border-2 hover:bg-lime-600/20 transition-none",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-4 py-2 ",
        sm: "h-9  px-3 ",
        lg: "h-12 px-8 ",
        icon: "size-9",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
