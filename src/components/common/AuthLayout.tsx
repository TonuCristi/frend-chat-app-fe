import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="grid h-full grid-cols-1 gap-4 p-4 md:grid-cols-2">
      <div className="border-primary hidden flex-col items-center justify-center gap-2 rounded-md border-2 p-4 md:flex">
        <div className="flex items-center gap-2">
          <span className="border-primary h-10 w-10 rounded-full border-2"></span>
          <span className="text-primary text-5xl font-bold tracking-wider uppercase">
            Frend
          </span>
        </div>
        <p className="text-zinc-400">Say hi to your friends!</p>
      </div>

      <div className="border-primary flex items-center justify-center rounded-md border-2 p-4">
        <Outlet />
      </div>
    </div>
  );
}
