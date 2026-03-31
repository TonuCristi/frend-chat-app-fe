import ChatListItemDropdown from "./ChatListItemDropdown";

export default function ChatListItem() {
  return (
    <div className="flex gap-2 rounded-md bg-zinc-800 p-2">
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
