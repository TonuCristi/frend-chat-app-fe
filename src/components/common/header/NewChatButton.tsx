import { useState } from "react";

import Button from "../Button";
import Icon from "../Icon";
import Overlay from "../Overlay";
import NewChatForm from "../../features/chat/NewChatForm";

export default function NewChatButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center"
      >
        <Icon name="plusCircle" className="text-primary text-xl" />
      </Button>
      {isOpen && (
        <Overlay>
          <div className="flex h-full w-full items-center justify-center p-4">
            <NewChatForm onCancel={() => setIsOpen(false)} />
          </div>
        </Overlay>
      )}
    </>
  );
}
