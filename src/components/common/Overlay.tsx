import type { ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
};

export default function Overlay({ children }: Props) {
  return createPortal(
    <div className="bg-app/30 absolute top-0 left-0 z-50 h-screen w-full overflow-hidden backdrop-blur-md">
      {children}
    </div>,
    document.body,
  );
}
