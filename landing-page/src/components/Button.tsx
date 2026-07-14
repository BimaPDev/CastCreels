import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none";

const variants: Record<Variant, string> = {
  primary: "bg-amber text-cream hover:bg-amber-deep active:bg-amber-deep  ",
  secondary:
    "bg-card text-ink border border-ink/10 hover:bg-paper-deep dark:bg-carddark dark:text-cream dark:border-cream/15 dark:hover:bg-herodark",
  ghost: "text-ink hover:bg-ink/5 dark:text-cream dark:hover:bg-cream/10",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };
type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type Props = AnchorProps | ButtonProps;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  function Button(props, ref) {
    const {
      variant = "primary",
      size = "md",
      className,
      children,
      ...rest
    } = props;
    const cls = cn(base, variants[variant], sizes[size], className);
    if (props.as === "a") {
      const { as: _as, ...anchorRest } = rest as AnchorProps;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cls}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }
    const { as: _as, ...btnRest } = rest as ButtonProps;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cls}
        {...btnRest}
      >
        {children}
      </button>
    );
  },
);
