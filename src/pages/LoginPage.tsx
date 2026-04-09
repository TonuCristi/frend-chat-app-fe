import LoginForm from "../components/features/authentication/login/components/LoginForm";
import { Link } from "react-router";

export default function LoginPage() {
  return (
    <div className="w-xs lg:w-sm">
      <Link to="/" className="flex items-center gap-2">
        <span className="border-primary h-5 w-5 rounded-full border-2"></span>
        <span className="text-primary text-xl font-bold tracking-wider uppercase">
          Frend
        </span>
      </Link>
      <h1 className="text-2xl">Welcome back!</h1>
      <p className="mb-8 text-zinc-400">Your friends are waiting for you!</p>
      <LoginForm />
    </div>
  );
}
