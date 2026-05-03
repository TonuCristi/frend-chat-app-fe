import Icon from "../../common/Icon";
import Button from "../../common/Button";

export default function ChatHeader() {
  return (
    <div className="border-primary flex items-center gap-4 border-b-2 pb-4">
      <div className="flex gap-2">
        <div className="bg-primary h-12 w-12 rounded-full"></div>
        <div className="flex flex-col gap-0.5">
          <span>John Snow</span>
          <span className="text-sm text-zinc-400">Last seen on 03/05/2026</span>
        </div>
      </div>

      <Button className="ml-auto">
        <Icon name="search" className="text-primary stroke-3 text-xl" />
      </Button>
      <Button>
        <Icon name="info" className="text-primary stroke-3 text-xl" />
      </Button>
    </div>
  );
}
