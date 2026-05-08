import Sidebar from "../components/common/Sidebar";
import Chat from "../components/features/chat/Chat";

import { useSelectedChatStore } from "../store/useSelectedChatStore";

export default function HomePage() {
  const selectedChat = useSelectedChatStore((state) => state.selectedChat);

  return (
    <div className="grid h-full grid-cols-1 md:grid-cols-[40fr_60fr] lg:grid-cols-[30fr_70fr] xl:grid-cols-[25fr_75fr] 2xl:grid-cols-[20fr_80fr]">
      <div className="md:border-primary hidden flex-col overflow-hidden p-4 md:flex md:border-r-2">
        <Sidebar />
      </div>
      {selectedChat ? <Chat /> : null}
    </div>
  );
}
