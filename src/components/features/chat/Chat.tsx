import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

export default function Chat() {
  return (
    <div className="flex h-full flex-col overflow-hidden p-4">
      <ChatHeader />
      <Messages />
      <MessageInput />
    </div>
  );
}
