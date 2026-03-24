import type { ReactNode } from "react";

import { LuChevronDown, LuChevronUp } from "react-icons/lu";

type IconName = "chevronDown" | "chevronUp";

type Props = {
  name: IconName;
  className?: string;
};

export default function Icon({ name, className = "" }: Props) {
  const icon: Record<IconName, ReactNode> = {
    chevronDown: <LuChevronDown />,
    chevronUp: <LuChevronUp />,
  };

  return <span className={className}>{icon[name]}</span>;
}
