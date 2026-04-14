import { useState } from "react";

import Button from "../../../common/Button";
import Icon from "../../../common/Icon";

import { useClickOutside } from "../../../../hooks/useClickOutside";
import { cn } from "../../../../utils/cn";

export default function ChatListItemDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useClickOutside(() => setIsOpen(false));

  return (
    <div ref={containerRef} className="relative">
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        className="group relative flex cursor-pointer items-center justify-center"
      >
        <Icon
          name="verticalDots"
          className="text-primary relative z-10 text-xl"
        />
        <div className="absolute top-1/2 left-1/2 flex h-7 w-7 -translate-1/2 items-center justify-center overflow-hidden rounded-full">
          <div
            className={cn(
              "bg-app h-0 w-0 rounded-full transition-all group-hover:h-full group-hover:w-full group-active:h-full group-active:w-full",
              isOpen && "h-full w-full",
            )}
          ></div>
        </div>
      </Button>

      {isOpen && (
        <div className="border-primary absolute top-full right-0 mt-2 flex w-40 flex-col rounded-md border-2 bg-zinc-900 p-2">
          asdasdasd
        </div>
      )}
    </div>
  );
}
