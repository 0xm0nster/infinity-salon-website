import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Premium salon variants
        gold: "bg-gradient-to-br from-[hsl(40_55%_50%)] to-[hsl(40_45%_65%)] text-white font-semibold shadow-[0_8px_30px_-8px_hsla(40,55%,50%,0.4)] hover:shadow-[0_20px_40px_-20px_hsla(0,0%,0%,0.3)] hover:scale-105 active:scale-100",
        hero: "bg-gradient-to-br from-[hsl(40_55%_50%)] to-[hsl(40_45%_65%)] text-white font-semibold text-base tracking-wide shadow-[0_8px_30px_-8px_hsla(40,55%,50%,0.4)] hover:shadow-[0_20px_40px_-20px_hsla(0,0%,0%,0.3)] hover:scale-105 active:scale-100 px-8 py-6",
        "outline-light": "border-2 border-[hsl(45_25%_95%)] text-[hsl(45_25%_95%)] hover:bg-[hsl(45_25%_95%)/0.1] font-medium tracking-wide",
        "outline-gold": "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium tracking-wide",
        dark: "bg-secondary text-secondary-foreground hover:bg-[hsl(0_0%_12%)] font-medium",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-md px-10 text-base",
        icon: "h-10 w-10",
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
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
