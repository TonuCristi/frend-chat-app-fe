import { cn } from "../../utils/cn";

type Props = {
  variant: "lg" | "md" | "sm";
};

export default function Loader({ variant }: Props) {
  return (
    <div
      className={cn(
        "text-primary relative font-bold uppercase",
        variant === "lg" && "h-14 w-14 text-xl",
        variant === "md" && "h-11 w-11 text-lg",
        variant === "sm" && "text-md h-8 w-8",
      )}
    >
      <div
        className={cn(
          "border-l-primary h-full w-full animate-spin rounded-full border-t-zinc-800 border-r-zinc-800 border-b-zinc-800",
          variant === "lg" && "border-8",
          variant === "md" && "border-6",
          variant === "sm" && "border-5",
        )}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-1/2">F</div>
    </div>
  );
}
