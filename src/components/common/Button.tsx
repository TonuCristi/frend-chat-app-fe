import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  ["cursor-pointer transition-all disabled:cursor-not-allowed"],
  {
    variants: {
      variant: {
        empty: "",
        primary:
          "py-2 px-4 bg-primary hover:bg-primary-hover border-2 border-primary hover:border-primary-hover rounded-md",
        secondary:
          "py-2 px-4 border-2 border-primary hover:border-primary-hover hover:bg-zinc-800 rounded-md",
      },
      size: {
        full: "w-full",
        auto: "w-auto",
      },
    },
    defaultVariants: {
      variant: "empty",
      size: "auto",
    },
  },
);

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  VariantProps<typeof button>;

export default function Button({
  children,
  className,
  variant,
  size,
  ...props
}: Props) {
  return (
    <button {...props} className={button({ variant, size, className })}>
      {children}
    </button>
  );
}
