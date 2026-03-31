import ChatsList from "../features/chats/components/ChatsList";
import Icon from "./Icon";
import Input from "./Input";

export default function Sidebar() {
  return (
    <aside className="flex h-full flex-col gap-4 p-4">
      <Input
        variant="primary"
        width="full"
        placeholder="Search your contact..."
        rightIcon={<Icon name="search" className="text-primary stroke-3" />}
      />
      <ChatsList />
    </aside>
  );
}
