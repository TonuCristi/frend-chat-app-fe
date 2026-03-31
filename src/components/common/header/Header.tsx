import Icon from "../Icon";
import UserDropdown from "./UserDropdown";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="border-primary flex items-center gap-4 border-b-2 p-4">
      <Link to="/" className="flex items-center gap-2">
        <span className="border-primary h-5 w-5 rounded-full border-2"></span>
        <span className="text-primary text-xl font-bold tracking-wider uppercase">
          Frend
        </span>
      </Link>

      <div className="group relative cursor-pointer">
        <Icon
          name="burgerMenu"
          className="text-primary relative z-10 text-xl"
        />
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-1/2 items-center justify-center overflow-hidden rounded-full">
          <div className="h-0 w-0 bg-zinc-800 transition-all group-hover:h-full group-hover:w-full group-active:h-full group-active:w-full"></div>
        </div>
      </div>

      <div className="ml-auto">
        <UserDropdown />
      </div>
    </header>
  );
}
