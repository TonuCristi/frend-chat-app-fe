import type { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import Button from "./Button";

import { cn } from "../../utils/cn";

const inputContainer = cva([""], {
  variants: {
    variant: {
      default: "",
      primary: "flex items-center gap-2 border-2 border-primary rounded-md p-2",
    },
    width: {
      full: "w-full",
      auto: "w-auto",
    },
  },
  defaultVariants: {
    variant: "default",
    width: "auto",
  },
});

const input = cva([""], {
  variants: {
    variant: {
      default: "",
      primary: "outline-none placeholder:text-zinc-500",
    },
    width: {
      full: "w-full",
      auto: "w-auto",
    },
  },
  defaultVariants: {
    variant: "default",
    width: "auto",
  },
});

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  VariantProps<typeof input> & {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    onLeftIconClick?: () => void;
    onRightIconClick?: () => void;
  };

export default function Input({
  className,
  variant,
  width,
  leftIcon,
  rightIcon,
  onLeftIconClick,
  onRightIconClick,
  ...props
}: Props) {
  function handleLeftIconClick() {
    if (onLeftIconClick) {
      onLeftIconClick();
    }
  }

  function handleRightIconClick() {
    if (onRightIconClick) {
      onRightIconClick();
    }
  }

  return (
    <div className={cn(inputContainer({ variant, width, className }))}>
      {leftIcon && (
        <Button
          className={cn(
            "flex items-center justify-center",
            onLeftIconClick && "cursor-default",
          )}
          onClick={handleLeftIconClick}
        >
          {leftIcon}
        </Button>
      )}

      <input {...props} className={cn(input({ variant, width, className }))} />

      {rightIcon && (
        <Button
          className={cn(
            "flex items-center justify-center",
            onRightIconClick && "cursor-default",
          )}
          onClick={handleRightIconClick}
        >
          {rightIcon}
        </Button>
      )}
    </div>
  );
}
