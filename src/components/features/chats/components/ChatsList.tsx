import ChatListItem from "./ChatListItem";

import { queryClient } from "../../../../main";
import type { Chat } from "../../../../types/chat.type";

export default function ChatsList() {
  const chats = queryClient.getQueryData<Chat[]>(["chats"]);

  return (
    <ul className="scrollbar flex flex-col gap-2 overflow-y-auto pr-2">
      {chats?.map((chat) => (
        <li key={chat.id}>
          <ChatListItem chat={chat} />
        </li>
      ))}
    </ul>
  );
}
