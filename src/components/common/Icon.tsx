import type { ReactNode } from "react";

import {
  LuAlignJustify,
  LuChevronDown,
  LuChevronUp,
  LuEllipsisVertical,
  LuEye,
  LuEyeOff,
  LuSearch,
  LuX,
} from "react-icons/lu";

type IconName =
  | "chevronDown"
  | "chevronUp"
  | "burgerMenu"
  | "search"
  | "verticalDots"
  | "xmark"
  | "eye"
  | "eyeClosed";

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
    xmark: <LuX />,
    eye: <LuEye />,
    eyeClosed: <LuEyeOff />,
  };

  return <span className={className}>{icon[name]}</span>;
}
