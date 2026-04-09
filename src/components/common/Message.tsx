import type { ReactNode } from "react";

import { cn } from "../../utils/cn";

export type Props = {
  type: "success" | "error";
  children: ReactNode;
  className?: string;
};

export default function Message({ type, children, className }: Props) {
  return (
    <p
      className={cn(
        "rounded-2xl bg-zinc-800 px-2 py-1 text-sm font-semibold text-red-500",
        type === "success" && "text-green-600",
        className,
      )}
    >
      {children}
    </p>
  );
}
