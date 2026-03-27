import Icon from "./Icon";
import Input from "./Input";

export default function Sidebar() {
  return (
    <aside className="h-full p-4 sm:p-8">
      <Input
        variant="primary"
        width="full"
        placeholder="Search your contact..."
        rightIcon={<Icon name="search" className="text-primary stroke-3" />}
      />
    </aside>
  );
}
