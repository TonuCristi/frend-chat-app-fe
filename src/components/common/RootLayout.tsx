import Header from "./header/Header";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div>
      <Header />
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
}
