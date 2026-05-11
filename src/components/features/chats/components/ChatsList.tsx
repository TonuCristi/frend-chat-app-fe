import ChatListItem from "./ChatListItem";

export default function ChatsList() {
  return (
    <ul className="scrollbar flex flex-col gap-2 overflow-y-auto pr-2">
      {/* {chats.map((chat) => (
        <li key={chat.id}>
          <ChatListItem chat={chat} />
          </li>
          ))} */}
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
    </ul>
  );
}
