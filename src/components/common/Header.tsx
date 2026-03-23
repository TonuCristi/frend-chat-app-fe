import { LuChevronDown } from "react-icons/lu";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 border-b-2 border-amber-400 px-8 py-4">
      <div className="flex items-center gap-2">
        <span className="h-5 w-5 rounded-full border-2 border-amber-400"></span>
        <span className="text-xl font-bold tracking-wider text-amber-400 uppercase">
          Frend
        </span>
      </div>

      <div className="flex cursor-pointer items-center gap-4 rounded-md bg-zinc-800 px-2 py-1">
        <span className="font-semibold">John Snow</span>
        <span className="h-8 w-8 rounded-full bg-amber-400"></span>
        <span className="text-amber-400 *:stroke-3">
          <LuChevronDown />
        </span>
      </div>
    </header>
  );
}
