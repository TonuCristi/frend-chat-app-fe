import { cn } from "../../../utils/cn";

type Props = {
  isMine: boolean;
  text: string;
};

export default function Message({ isMine, text }: Props) {
  return (
    <div
      className={cn(
        "flex max-w-72 flex-col gap-1 lg:max-w-96",
        isMine ? "self-end" : "self-start",
      )}
    >
      <div
        className={cn(
          "flex w-full flex-col gap-1 rounded-md bg-zinc-800 p-2",
          isMine ? "rounded-tr-none" : "rounded-tl-none",
        )}
      >
        <p>{text}</p>
        <span className="self-end text-sm text-zinc-400">14:20</span>
      </div>
      {isMine && (
        <span className="self-end text-sm text-zinc-400">Seen 1h ago</span>
      )}
    </div>
  );
}
