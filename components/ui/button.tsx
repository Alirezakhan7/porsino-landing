import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

/**
 * Development-only a11y helper:
 * If the button is icon-only, it must have an accessible name via:
 * - aria-label
 * - aria-labelledby
 * - or meaningful visible text content
 *
 * We cannot reliably detect “meaningful text” at compile time, so we warn at runtime in dev.
 */
function useA11yWarningForIconButton(params: {
  size?: ButtonProps['size'];
  asChild?: boolean;
  ariaLabel?: string | undefined;
  ariaLabelledBy?: string | undefined;
  children?: React.ReactNode;
}) {
  const { size, asChild, ariaLabel, ariaLabelledBy, children } = params;

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production') return;

    // Only warn for real <button> usage (not asChild), because when asChild=true
    // the underlying element and labeling may be controlled elsewhere.
    if (asChild) return;

    if (size !== 'icon') return;

    const hasAriaName =
      typeof ariaLabel === 'string' && ariaLabel.trim().length > 0
        ? true
        : typeof ariaLabelledBy === 'string' && ariaLabelledBy.trim().length > 0;

    // Very lightweight heuristic: if there is any string/number child content, we assume it’s labeled.
    // Icon-only buttons typically have only an <svg/> node and no text.
    const hasTextChild = React.Children.toArray(children).some((c) => {
      return typeof c === 'string' || typeof c === 'number';
    });

    if (!hasAriaName && !hasTextChild) {
      // eslint-disable-next-line no-console
      console.warn(
        `[a11y] Button with size="icon" is missing an accessible name. Add aria-label or aria-labelledby.\n` +
          `Example: <Button size="icon" aria-label="باز کردن منو">...</Button>`
      );
    }
  }, [size, asChild, ariaLabel, ariaLabelledBy, children]);
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    useA11yWarningForIconButton({
      size,
      asChild,
      ariaLabel: (props as any)['aria-label'],
      ariaLabelledBy: (props as any)['aria-labelledby'],
      children,
    });

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
