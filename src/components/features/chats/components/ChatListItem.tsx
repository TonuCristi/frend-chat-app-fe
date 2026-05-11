import ChatListItemDropdown from "./ChatListItemDropdown";

// import { useSelectedChatStore } from "../../../../store/useSelectedChatStore";
import { cn } from "../../../../utils/cn";

export default function ChatListItem() {
  // const selectedChat = useSelectedChatStore((state) => state.selectedChat);
  // const setSelectedChat = useSelectedChatStore(
  //   (state) => state.setSelectedChat,
  // );

  return (
    <div
      // onClick={() => setSelectedChat(chat)}
      className={cn(
        "flex cursor-pointer gap-2 rounded-md bg-zinc-800 p-2 text-left transition-all hover:bg-zinc-700",
        // selectedChat?.id === chat.id && "bg-zinc-700",
      )}
    >
      <span className="bg-primary h-12 w-12 shrink-0 rounded-full"></span>

      <div className="flex w-full items-center justify-between gap-2">
        <div className="flex flex-col gap-0.5">
          <span>John Snow</span>
          <span className="text-sm text-zinc-400">Hi, how are you?</span>
        </div>

        <ChatListItemDropdown />
      </div>
    </div>
  );
}
