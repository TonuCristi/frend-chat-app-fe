import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  ["cursor-pointer transition-all disabled:cursor-not-allowed"],
  {
    variants: {
      variant: {
        default: "",
        primary:
          "py-2 px-4 bg-primary active:bg-primary-hover hover:bg-primary-hover border-2 border-primary active:border-primary-hover hover:border-primary-hover rounded-md",
        secondary:
          "py-2 px-4 border-2 border-primary active:border-primary-hover active:bg-zinc-800 hover:border-primary-hover hover:bg-zinc-800 rounded-md",
      },
      size: {
        full: "w-full",
        auto: "w-auto",
      },
    },
    defaultVariants: {
      variant: "default",
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
