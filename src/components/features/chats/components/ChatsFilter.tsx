import { useFormContext, useWatch } from "react-hook-form";
import Button from "../../../common/Button";
import { cn } from "../../../../utils/cn";

const filters = [
  {
    text: "All",
    value: "all",
  },
  {
    text: "Direct",
    value: "direct",
  },
  {
    text: "Group",
    value: "group",
  },
];

export default function ChatsFilter() {
  const { control, setValue } = useFormContext();

  const watchedType = useWatch({ control, name: "type" });

  return (
    <div className="flex justify-between gap-2">
      {filters.map(({ text, value }) => (
        <Button
          key={value}
          width="full"
          onClick={() => setValue("type", value)}
          className={cn(
            "rounded-md bg-zinc-800 p-0.5 transition-all hover:bg-zinc-700",
            watchedType === value && "bg-zinc-700",
          )}
        >
          {text}
        </Button>
      ))}
    </div>
  );
}
