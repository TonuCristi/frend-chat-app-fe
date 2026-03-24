import { Activity, useState } from "react";

import Icon from "../Icon";
import Button from "../Button";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex cursor-pointer items-center gap-4 rounded-md bg-zinc-800 px-2 py-1"
      >
        <span className="font-semibold">John Snow</span>
        <span className="bg-primary h-8 w-8 rounded-full"></span>
        {isOpen ? (
          <Icon name="chevronUp" className="text-primary *:stroke-3" />
        ) : (
          <Icon name="chevronDown" className="text-primary *:stroke-3" />
        )}
      </Button>

      <Activity mode={isOpen ? "visible" : "hidden"}>
        <div className="absolute top-full left-0 mt-2 flex w-full flex-col rounded-md bg-zinc-800 p-2">
          <Button className="hover:bg-app rounded-md p-2 transition-all">
            Profile
          </Button>
          <Button className="hover:bg-app rounded-md p-2 transition-all">
            Log out
          </Button>
        </div>
      </Activity>
    </div>
  );
}
