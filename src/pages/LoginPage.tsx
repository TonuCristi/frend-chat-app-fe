import LoginForm from "../components/features/authentication/login/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="">
      <h1 className="text-2xl">Welcome back!</h1>
      <p className="mb-4">Your friends are waiting for you!</p>
      <LoginForm />
    </div>
  );
}
