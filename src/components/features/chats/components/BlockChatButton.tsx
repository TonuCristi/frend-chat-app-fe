import { useState } from "react";

import Button from "../../../common/Button";
import Icon from "../../../common/Icon";
import ConfirmationModal from "../../../common/ConfirmationModal";

export default function BlockChatButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="active:bg-app hover:bg-app flex items-center gap-2 rounded-md p-2 text-left text-nowrap transition-all"
      >
        <Icon name="block" />
        <span>Block</span>
      </Button>
      {isOpen && (
        <ConfirmationModal
          description="This will stop all incoming messages from this chat. You can reverse this action later."
          onAproveClick={() => console.log("Click!")}
          onRejectClick={() => setIsOpen(false)}
        >
          Are you sure you want to block this chat?
        </ConfirmationModal>
      )}
    </>
  );
}
