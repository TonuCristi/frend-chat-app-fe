import BurgerMenu from "./BurgerMenu";
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

      <BurgerMenu />

      <div className="ml-auto">
        <UserDropdown />
      </div>
    </header>
  );
}
