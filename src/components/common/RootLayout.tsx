import { useQuery } from "@tanstack/react-query";
import { Navigate, Outlet } from "react-router";

import Header from "./header/Header";
import Loader from "./Loader";

import { authApi } from "../../api/authApi";

export default function RootLayout() {
  const { isPending, isError } = useQuery({
    queryKey: ["user"],
    queryFn: authApi.getLoggedUser,
    retry: false,
  });

  if (isError) {
    return <Navigate to="/login" />;
  }

  if (isPending) {
    return (
      <div className="flex h-screen w-full items-center justify-center overflow-hidden">
        <Loader variant="lg" />
      </div>
    );
  }

  return (
    <div className="flex h-dvh w-full flex-col overflow-hidden">
      <Header />
      <main className="flex h-full flex-col overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
