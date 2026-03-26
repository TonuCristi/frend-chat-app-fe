import Icon from "../Icon";
import UserDropdown from "./UserDropdown";

export default function Header() {
  return (
    <header className="border-primary flex items-center gap-4 border-b-2 px-4 py-4 sm:px-8">
      <div className="flex items-center gap-2">
        <span className="border-primary h-5 w-5 rounded-full border-2"></span>
        <span className="text-primary text-xl font-bold tracking-wider uppercase">
          Frend
        </span>
      </div>

      <div className="group relative cursor-pointer">
        <Icon
          name="burgerMenu"
          className="text-primary relative z-10 text-xl"
        />
        <div className="absolute top-1/2 left-1/2 h-0 w-0 -translate-1/2 rounded-full bg-zinc-800 transition-all group-hover:h-10 group-hover:w-10 group-active:h-10 group-active:w-10"></div>
      </div>

      <div className="ml-auto">
        <UserDropdown />
      </div>
    </header>
  );
}
