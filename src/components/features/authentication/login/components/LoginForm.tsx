import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Label from "../../../../common/Label";
import Input from "../../../../common/Input";
import TogglePasswordInput from "../../../../common/TogglePasswordInput";
import Button from "../../../../common/Button";
import Message from "../../../../common/Message";
import InputContainer from "../../../../common/InputContainer";
import { Link } from "react-router";

import { loginSchema } from "../../../../../schemas/login.schema";
import type { Login } from "../../../../../types/user.type";

export default function LoginForm() {
  const methods = useForm<Login>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<Login> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="mb-1 flex flex-col gap-4">
          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input
              variant="primary"
              id="email"
              name="email"
              placeholder="Enter your email..."
            />
            {errors.email && (
              <Message type="error" className="mt-1">
                {errors.email.message}
              </Message>
            )}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">Password</Label>
            <TogglePasswordInput
              id="password"
              name="password"
              placeholder="Enter your password..."
            />
            {errors.password && (
              <Message type="error" className="mt-1">
                {errors.password.message}
              </Message>
            )}
          </InputContainer>
        </div>

        <Link to="/forgot-password" className="mb-8 self-end text-zinc-400">
          Forgot password?
        </Link>

        <Button variant="primary" type="submit" className="mb-2">
          Login
        </Button>

        <Link to="/register" className="mb-4 text-center text-zinc-400">
          Don't have an account?{" "}
          <span className="text-primary font-semibold">Register</span>
        </Link>
      </form>
    </FormProvider>
  );
}
