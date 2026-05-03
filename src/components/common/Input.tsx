import type { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import Button from "./Button";

import { cn } from "../../utils/cn";
import { useFormContext } from "react-hook-form";

const inputContainer = cva([""], {
  variants: {
    variant: {
      default: "",
      primary:
        "flex items-center justify-between gap-2 border-2 border-primary rounded-md p-2",
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

const input = cva(["outline-none"], {
  variants: {
    variant: {
      default: "",
      primary: "outline-none placeholder:text-zinc-500",
    },
    width: {
      full: "w-full",
      auto: "w-full",
    },
  },
  defaultVariants: {
    variant: "default",
    width: "full",
  },
});

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  VariantProps<typeof input> & {
    name: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    onLeftIconClick?: () => void;
    onRightIconClick?: () => void;
  };

export default function Input({
  className,
  name,
  variant,
  width,
  leftIcon,
  rightIcon,
  onLeftIconClick,
  onRightIconClick,
  ...props
}: Props) {
  const { register } = useFormContext();

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
          type="button"
          className={cn(
            "flex items-center justify-center",
            onLeftIconClick && "cursor-pointer",
          )}
          onClick={handleLeftIconClick}
        >
          {leftIcon}
        </Button>
      )}

      <input
        {...props}
        {...register(name)}
        className={cn(input({ variant, width }))}
      />

      {rightIcon && (
        <Button
          type="button"
          className={cn(
            "flex items-center justify-center",
            onRightIconClick && "cursor-pointer",
          )}
          onClick={handleRightIconClick}
        >
          {rightIcon}
        </Button>
      )}
    </div>
  );
}
