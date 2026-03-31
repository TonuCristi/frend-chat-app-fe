import type { ReactNode } from "react";

import {
  LuAlignJustify,
  LuChevronDown,
  LuChevronUp,
  LuEllipsisVertical,
  LuSearch,
} from "react-icons/lu";

type IconName =
  | "chevronDown"
  | "chevronUp"
  | "burgerMenu"
  | "search"
  | "verticalDots";

type Props = {
  name: IconName;
  className?: string;
};

export default function Icon({ name, className = "" }: Props) {
  const icon: Record<IconName, ReactNode> = {
    chevronDown: <LuChevronDown />,
    chevronUp: <LuChevronUp />,
    burgerMenu: <LuAlignJustify />,
    search: <LuSearch />,
    verticalDots: <LuEllipsisVertical />,
  };

  return <span className={className}>{icon[name]}</span>;
}
