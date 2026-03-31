import ChatListItem from "./ChatListItem";

export default function ChatsList() {
  return (
    <ul className="flex flex-col gap-2">
      <li>
        <ChatListItem />
      </li>
      <li>
        <ChatListItem />
      </li>
      <li>
        <ChatListItem />
      </li>
      <li>
        <ChatListItem />
      </li>
    </ul>
  );
}
