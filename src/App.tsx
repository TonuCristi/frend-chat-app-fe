import { Outlet } from "react-router";

import Header from "./components/common/header/Header";

function App() {
  return (
    <div className="h-dvh overflow-hidden">
      <Header />
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
