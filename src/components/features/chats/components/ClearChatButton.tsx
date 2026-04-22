import { useState } from "react";

import Button from "../../../common/Button";
import Icon from "../../../common/Icon";
import ConfirmationModal from "../../../common/ConfirmationModal";

export default function ClearChatButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="active:bg-app hover:bg-app flex items-center gap-2 rounded-md p-2 text-left text-nowrap transition-all"
      >
        <Icon name="circleMinus" />
        <span>Clear chat</span>
      </Button>
      {isOpen && (
        <ConfirmationModal
          description="All messages will be removed from this conversation. This action cannot be undone, but you can start a new chat anytime."
          onAproveClick={() => console.log("Click!")}
          onRejectClick={() => setIsOpen(false)}
        >
          Are you sure you want to clear this chat?
        </ConfirmationModal>
      )}
    </>
  );
}
