import type { ReactNode } from "react";

import {
  LuAlignJustify,
  LuChevronDown,
  LuChevronUp,
  LuCircleMinus,
  LuCircleOff,
  LuCirclePlus,
  LuEllipsisVertical,
  LuEye,
  LuEyeOff,
  LuHeart,
  LuInfo,
  LuSearch,
  LuSend,
  LuSmile,
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
  | "block"
  | "info"
  | "send"
  | "emoji"
  | "plusCircle";

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
    info: <LuInfo />,
    send: <LuSend />,
    emoji: <LuSmile />,
    plusCircle: <LuCirclePlus />,
  };

  return <span className={className}>{icon[name]}</span>;
}
