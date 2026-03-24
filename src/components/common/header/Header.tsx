import UserDropdown from "./UserDropdown";

export default function Header() {
  return (
    <header className="border-primary flex items-center justify-between gap-4 border-b-2 px-8 py-4">
      <div className="flex items-center gap-2">
        <span className="border-primary h-5 w-5 rounded-full border-2"></span>
        <span className="text-primary text-xl font-bold tracking-wider uppercase">
          Frend
        </span>
      </div>

      <UserDropdown />
    </header>
  );
}
