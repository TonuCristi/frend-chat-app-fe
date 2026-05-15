import { useQueries } from "@tanstack/react-query";
import { Navigate, Outlet } from "react-router";

import Header from "./header/Header";
import Loader from "./Loader";

import { authApi } from "../../api/authApi";
import { chatsApi } from "../../api/chatsApi";

export default function RootLayout() {
  const [userResult, chatsResult] = useQueries({
    queries: [
      { queryKey: ["user"], queryFn: authApi.getLoggedUser, retry: false },
      {
        queryKey: ["chats"],
        queryFn: () => chatsApi.getChats({ page: 0, perPage: 15 }),
        retry: false,
      },
    ],
  });

  if (userResult.isError || chatsResult.isError) {
    return <Navigate to="/login" />;
  }

  if (userResult.isPending || chatsResult.isPending) {
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
