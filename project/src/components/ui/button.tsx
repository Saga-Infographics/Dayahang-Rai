import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors transition-transform duration-200 transform-gpu relative overflow-hidden isolate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "rounded-2xl bg-[#111111] text-[#EDEDED] shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:border-b-4 hover:border-[#BFA372] transition-all duration-250 ease-out before:content-[''] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/10 before:via-white/20 before:to-white/10 before:opacity-0 hover:before:opacity-100 hover:before:translate-x-0 before:transition-transform before:duration-250 before:z-0",
        primary:
          "rounded-2xl bg-[#111111] text-[#EDEDED] shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:border-b-4 hover:border-[#BFA372] transition-all duration-250 ease-out before:content-[''] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/10 before:via-white/20 before:to-white/10 before:opacity-0 hover:before:opacity-100 hover:before:translate-x-0 before:transition-transform before:duration-250 before:z-0",
        destructive:
          "rounded-2xl bg-destructive text-destructive-foreground shadow-lg hover:bg-destructive/90 hover:shadow-xl transition-all duration-250 ease-out",
        outline:
          "rounded-2xl border-2 border-[#111111] bg-white text-[#111111] shadow-lg hover:border-[#BFA372] hover:shadow-2xl hover:-translate-y-1 transition-all duration-250 ease-out before:content-[''] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-black/10 before:via-white/14 before:to-black/10 before:opacity-0 hover:before:opacity-100 hover:before:translate-x-0 before:transition-transform before:duration-250 before:z-0",
        secondary:
          "rounded-2xl bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/80 hover:shadow-xl transition-all duration-250 ease-out",
        ghost: "rounded-2xl text-muted-foreground hover:shadow-lg hover:-translate-y-1 transition-all duration-250 ease-out before:content-[''] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/8 before:via-white/14 before:to-white/8 before:opacity-0 hover:before:opacity-100 hover:before:translate-x-0 before:transition-transform before:duration-250 before:z-0",
        link: "rounded-xl text-[#111111] underline-offset-4 hover:text-[#BFA372] hover:underline transition-colors duration-250",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-3 text-xs",
        lg: "h-12 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
