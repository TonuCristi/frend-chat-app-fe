import { useState } from "react";

import Icon from "../Icon";
import Button from "../Button";

import { useClickOutside } from "../../../hooks/useClickOutside";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useClickOutside(() => setIsOpen(false));

  return (
    <div ref={containerRef} className="relative">
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex cursor-pointer items-center gap-4 rounded-md bg-zinc-800 px-2 py-1"
      >
        <span className="hidden font-semibold sm:block">John Snow</span>
        <span className="bg-primary h-8 w-8 rounded-full"></span>
        <Icon
          name={isOpen ? "chevronUp" : "chevronDown"}
          className="text-primary *:stroke-3"
        />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 flex w-40 flex-col rounded-md bg-zinc-800 p-2 sm:w-full">
          <Button className="hover:bg-app rounded-md p-2 transition-all">
            Profile
          </Button>
          <Button className="hover:bg-app rounded-md p-2 transition-all">
            Log out
          </Button>
        </div>
      )}
    </div>
  );
}
