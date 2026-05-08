import type { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../utils/cn";
import { useFormContext } from "react-hook-form";

export type Option = {
  value: string;
  text: string;
};

const select = cva(["outline-none"], {
  variants: {
    variant: {
      default: "",
      primary: "outline-none border-2 border-primary rounded-md p-2",
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
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> &
  VariantProps<typeof select> & {
    options: Option[];
    name: string;
  };

export default function Select({
  options,
  variant,
  width,
  name,
  className,
  ...props
}: Props) {
  const { register } = useFormContext();

  return (
    <select
      defaultValue={options[0].value}
      {...props}
      {...register(name)}
      className={cn(select({ variant, width, className }))}
    >
      {options.map(({ value, text }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
  );
}
