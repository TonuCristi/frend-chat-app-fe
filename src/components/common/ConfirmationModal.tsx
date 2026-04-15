import type { ReactNode } from "react";

import Overlay from "./Overlay";
import Button from "./Button";

type Props = {
  children: ReactNode;
  description: string;
  onAproveClick: () => void;
  onRejectClick: () => void;
};

export default function ConfirmationModal({
  children,
  description,
  onAproveClick,
  onRejectClick,
}: Props) {
  return (
    <Overlay>
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex h-full items-center justify-center p-4"
      >
        <div className="border-primary w-sm rounded-md border-2 bg-zinc-800 p-4">
          <p className="mb-2">{children}</p>
          <p className="mb-8 text-sm text-zinc-500">{description}</p>
          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              width="full"
              onClick={onAproveClick}
              className="text-nowrap hover:bg-zinc-900 active:bg-zinc-900"
            >
              Yes, I am!
            </Button>
            <Button variant="primary" width="full" onClick={onRejectClick}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </Overlay>
  );
}
