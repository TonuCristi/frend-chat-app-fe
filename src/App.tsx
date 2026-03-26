import "./App.css";

import Header from "./components/common/header/Header";
import Sidebar from "./components/common/Sidebar";

function App() {
  return (
    <div className="h-dvh overflow-hidden">
      <Header />
      <div className="grid h-full grid-cols-1 sm:grid-cols-[35fr_65fr] md:grid-cols-[30fr_70fr] lg:grid-cols-[25fr_75fr] xl:grid-cols-[20fr_80fr]">
        <div className="hidden sm:block">
          <Sidebar />
        </div>
        <main className="sm:border-primary h-full p-4 sm:border-l-2 sm:p-8">
          main
        </main>
      </div>
    </div>
  );
}

export default App;
