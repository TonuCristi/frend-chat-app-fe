import { useState } from "react";

import Button from "../Button";
import Icon from "../Icon";
import Overlay from "../Overlay";
import NewChatForm from "../../features/chat/NewChatForm";

export default function NewChatButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <Icon name="plusCircle" className="text-primary text-xl" />
      </Button>
      {isOpen && (
        <Overlay>
          <div className="relative flex h-full w-full items-center justify-center gap-4 p-4">
            <Button
              onClick={() => setIsOpen(false)}
              className="group absolute top-4 right-4 cursor-pointer"
            >
              <Icon
                name="xmark"
                className="text-primary relative z-10 text-xl"
              />
              <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-1/2 items-center justify-center overflow-hidden rounded-full">
                <div className="h-0 w-0 rounded-full bg-zinc-700 transition-all group-hover:h-full group-hover:w-full group-active:h-full group-active:w-full"></div>
              </div>
            </Button>
            <NewChatForm onCancel={() => setIsOpen(false)} />
          </div>
        </Overlay>
      )}
    </>
  );
}
