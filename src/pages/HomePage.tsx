import Sidebar from "../components/common/Sidebar";
import ChatHeader from "../components/features/chat/ChatHeader";
import MessageInput from "../components/features/chat/MessageInput";
import Messages from "../components/features/chat/Messages";

export default function HomePage() {
  return (
    <div className="grid h-full grid-cols-1 sm:grid-cols-[35fr_65fr] md:grid-cols-[30fr_70fr] lg:grid-cols-[25fr_75fr] xl:grid-cols-[20fr_80fr]">
      <div className="hidden flex-col overflow-hidden p-4 sm:flex">
        <Sidebar />
      </div>
      <div className="sm:border-primary flex h-full flex-col overflow-hidden p-4 sm:border-l-2">
        <ChatHeader />
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
}
