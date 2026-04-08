import { useState } from "react";

import Button from "../Button";
import Icon from "../Icon";
import Overlay from "../Overlay";
import Sidebar from "../Sidebar";

import { cn } from "../../../utils/cn";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="group relative block cursor-pointer sm:hidden"
      >
        <Icon
          name="burgerMenu"
          className="text-primary relative z-10 text-xl"
        />
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-1/2 items-center justify-center overflow-hidden rounded-full">
          <div
            className={cn(
              "h-0 w-0 rounded-full bg-zinc-800 transition-all group-hover:h-full group-hover:w-full group-active:h-full group-active:w-full",
              isOpen && "h-full w-full",
            )}
          ></div>
        </div>
      </Button>

      {isOpen && (
        <Overlay>
          <div className="flex h-full flex-col gap-4 p-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-primary text-xl">Chats</h2>
              <Button
                onClick={() => setIsOpen(false)}
                className="group relative block cursor-pointer sm:hidden"
              >
                <Icon
                  name="xmark"
                  className="text-primary relative z-10 text-xl"
                />
                <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-1/2 items-center justify-center overflow-hidden rounded-full">
                  <div className="h-0 w-0 rounded-full bg-zinc-800 transition-all group-hover:h-full group-hover:w-full group-active:h-full group-active:w-full"></div>
                </div>
              </Button>
            </div>
            <Sidebar />
          </div>
        </Overlay>
      )}
    </>
  );
}
