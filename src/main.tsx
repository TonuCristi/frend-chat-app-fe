import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import ProfilePage from "./pages/ProfilePage.tsx";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import RootLayout from "./components/common/RootLayout.tsx";
import AuthLayout from "./components/common/AuthLayout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

export const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route element={<RootLayout />}>
              <Route index path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>

            <Route element={<AuthLayout />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toasterId="default"
        toastOptions={{
          className: "",
          duration: 3000,
          removeDelay: 1000,
          style: {
            background: "oklch(21% 0.006 285.885)",
            border: "2px solid oklch(62.7% 0.265 303.9)",
            color: "oklch(98.5% 0 0)",
          },
        }}
      />
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="top-left" />
    </QueryClientProvider>
  </StrictMode>,
);
