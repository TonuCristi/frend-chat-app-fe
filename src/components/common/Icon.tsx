import type { ReactNode } from "react";

import {
  LuAlignJustify,
  LuChevronDown,
  LuChevronUp,
  LuCircleMinus,
  LuCircleOff,
  LuEllipsisVertical,
  LuEye,
  LuEyeOff,
  LuHeart,
  LuSearch,
  LuTrash2,
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
  | "eyeClosed"
  | "heart"
  | "trash"
  | "circleMinus"
  | "block";

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
    heart: <LuHeart />,
    trash: <LuTrash2 />,
    circleMinus: <LuCircleMinus />,
    block: <LuCircleOff />,
  };

  return <span className={className}>{icon[name]}</span>;
}
