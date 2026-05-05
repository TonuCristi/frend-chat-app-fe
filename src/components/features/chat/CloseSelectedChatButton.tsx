import Button from "../../common/Button";
import Icon from "../../common/Icon";

import { useSelectedChatStore } from "../../../store/useSelectedChatStore";

export default function CloseSelectedChatButton() {
  const setSelectedChat = useSelectedChatStore(
    (state) => state.setSelectedChat,
  );

  return (
    <Button onClick={() => setSelectedChat(null)}>
      <Icon name="xmark" className="text-primary stroke-3 text-xl" />
    </Button>
  );
}
