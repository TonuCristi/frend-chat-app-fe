import "./App.css";

import Header from "./components/common/header/Header";
import Sidebar from "./components/common/Sidebar";

function App() {
  return (
    <div className="h-dvh overflow-hidden">
      <Header />
      <div className="grid h-full grid-cols-[20fr_80fr]">
        <Sidebar />
        <main className="border-primary h-full border-l-2 p-8">main</main>
      </div>
    </div>
  );
}

export default App;
