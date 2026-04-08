import type { DetailedHTMLProps, LabelHTMLAttributes } from "react";

import { cn } from "../../utils/cn";

type Props = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

export default function Label({ children, className, ...props }: Props) {
  return (
    <label {...props} className={cn("text-sm font-semibold", className)}>
      {children}
    </label>
  );
}
