import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Label from "../../../../common/Label";
import Input from "../../../../common/Input";
import TogglePasswordInput from "../../../../common/TogglePasswordInput";
import Button from "../../../../common/Button";
import Message from "../../../../common/Message";
import InputContainer from "../../../../common/InputContainer";
import { Link, useNavigate } from "react-router";

import { loginSchema } from "../../../../../schemas/login.schema";
import type { Login } from "../../../../../types/user.type";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "../../../../../api/authApi";

export default function LoginForm() {
  const methods = useForm<Login>({
    defaultValues: {
      email: "john@mail.com",
      password: "John2002@",
    },
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (user: Login) => {
      return authApi.login(user);
    },
    onSuccess: () => {
      navigate("/");
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<Login> = (data) => mutate(data);

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
              <Message variant="error" className="mt-1">
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
              <Message variant="error" className="mt-1">
                {errors.password.message}
              </Message>
            )}
          </InputContainer>
        </div>

        <Link to="/forgot-password" className="mb-8 self-end text-zinc-400">
          Forgot password?
        </Link>

        <Button
          variant="primary"
          type="submit"
          disabled={isPending}
          className="mb-2"
        >
          Login
        </Button>

        {error && (
          <Message variant="error" className="mb-2">
            {error.message}
          </Message>
        )}

        <Link to="/register" className="mb-4 text-center text-zinc-400">
          Don't have an account?{" "}
          <span className="text-primary font-semibold">Register</span>
        </Link>
      </form>
    </FormProvider>
  );
}
