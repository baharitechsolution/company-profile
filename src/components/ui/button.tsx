import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1482C2] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 cursor-pointer";

    const variants = {
      primary:
        "bg-[#1482C2] text-white hover:bg-[#0E6496] active:bg-[#0B4D74] shadow-xs",
      secondary:
        "bg-[#112252] text-white hover:bg-[#040e24] active:bg-[#000000]",
      outline:
        "border-2 border-[#1482C2] bg-transparent text-[#1482C2] hover:bg-[#1482C2] hover:text-white",
      white:
        "bg-white text-[#1482C2] hover:bg-slate-100 border border-transparent shadow-xs",
      ghost:
        "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs tracking-wide",
      md: "h-11 px-6 text-sm tracking-wide",
      lg: "h-13 px-8 text-base tracking-wide",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
