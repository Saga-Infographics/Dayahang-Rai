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
          "bg-[#CC5500] text-white shadow-md hover:shadow-lg hover:-translate-y-1 before:content-[''] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/10 before:via-white/20 before:to-white/10 before:opacity-0 hover:before:opacity-100 hover:before:translate-x-0 before:transition-transform before:duration-500 before:z-0",
        primary:
          "bg-[#CC5500] text-white shadow-lg hover:shadow-xl hover:-translate-y-1 before:content-[''] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/10 before:via-white/20 before:to-white/10 before:opacity-0 hover:before:opacity-100 hover:before:translate-x-0 before:transition-transform before:duration-500 before:z-0",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-[#CC5500] bg-white text-[#CC5500] shadow-sm hover:shadow-lg hover:-translate-y-1 before:content-[''] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/6 before:via-white/12 before:to-white/6 before:opacity-0 hover:before:opacity-100 hover:before:translate-x-0 before:transition-transform before:duration-500 before:z-0",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "text-muted-foreground hover:shadow-md hover:-translate-y-1 before:content-[''] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/8 before:via-white/14 before:to-white/8 before:opacity-0 hover:before:opacity-100 hover:before:translate-x-0 before:transition-transform before:duration-500 before:z-0",
        link: "text-[#CC5500] underline-offset-4 hover:underline",
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
