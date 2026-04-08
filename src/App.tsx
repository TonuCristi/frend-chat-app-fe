import RootLayout from "./components/common/RootLayout";
import AuthLayout from "./components/common/AuthLayout";

function App() {
  const isLogged = false;

  return (
    <div className="h-dvh overflow-hidden">
      {isLogged ? <RootLayout /> : <AuthLayout />}
    </div>
  );
}

export default App;
