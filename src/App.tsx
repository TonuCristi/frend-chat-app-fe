import { Outlet } from "react-router";

function App() {
  return (
    <div className="flex min-h-dvh overflow-hidden">
      <Outlet />
    </div>
  );
}

export default App;
