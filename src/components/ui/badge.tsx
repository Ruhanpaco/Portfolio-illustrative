import React from "react";
import { cn } from "@/app/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        {
          "border-transparent bg-blue-500 text-white hover:bg-blue-600": 
            variant === "default",
          "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-200": 
            variant === "secondary",
          "border-transparent bg-red-500 text-white hover:bg-red-600": 
            variant === "destructive",
          "border-slate-200 text-slate-900 hover:bg-slate-100": 
            variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge }; 