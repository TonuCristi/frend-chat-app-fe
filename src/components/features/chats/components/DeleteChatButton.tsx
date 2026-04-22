import { useState } from "react";

import Button from "../../../common/Button";
import Icon from "../../../common/Icon";
import ConfirmationModal from "../../../common/ConfirmationModal";

export default function DeleteChatButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="active:bg-app hover:bg-app flex items-center gap-2 rounded-md p-2 text-left text-nowrap transition-all"
      >
        <Icon name="trash" />
        <span>Delete chat</span>
      </Button>
      {isOpen && (
        <ConfirmationModal
          description="This will permanently delete this conversation and all its messages. This action cannot be undone."
          onAproveClick={() => console.log("Click!")}
          onRejectClick={() => setIsOpen(false)}
        >
          Are you sure you want to delete this chat?
        </ConfirmationModal>
      )}
    </>
  );
}
