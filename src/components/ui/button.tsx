import React from 'react';
import { cn } from "@/app/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

function isAnchorProps(props: unknown): props is React.AnchorHTMLAttributes<HTMLAnchorElement> {
  if (typeof props !== 'object' || props === null) return false;
  const maybe = props as Record<string, unknown>;
  return (
    typeof maybe.href === 'string' || typeof maybe.target === 'string' || typeof maybe.rel === 'string'
  );
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
      {
        'bg-blue-600 text-white hover:bg-blue-700': variant === 'default',
        'bg-red-500 text-white hover:bg-red-600': variant === 'destructive',
        'border border-slate-200 hover:bg-slate-100': variant === 'outline',
        'bg-slate-100 text-slate-900 hover:bg-slate-200': variant === 'secondary',
        'hover:bg-slate-100': variant === 'ghost',
        'text-blue-600 underline-offset-4 hover:underline': variant === 'link',
        'h-10 py-2 px-4': size === 'default',
        'h-9 px-3 text-sm': size === 'sm',
        'h-11 px-8 text-lg': size === 'lg',
        'h-10 w-10': size === 'icon',
      },
      className
    );
    if (asChild && isAnchorProps(props)) {
      // Only pass anchor-appropriate props
      const { href, target, rel, ...anchorRest } = props;
      return (
        <a
          className={classes}
          href={href}
          target={target}
          rel={rel}
          {...anchorRest}
        />
      );
    }
    // Only pass button-appropriate props
    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button }; 