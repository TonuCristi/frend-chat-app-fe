import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Label from "../../../../common/Label";
import Input from "../../../../common/Input";
import TogglePasswordInput from "../../../../common/TogglePasswordInput";
import Button from "../../../../common/Button";
import Message from "../../../../common/Message";
import InputContainer from "../../../../common/InputContainer";
import { Link, useNavigate } from "react-router";

import { registerSchema } from "../../../../../schemas/register.schema";
import type { Register } from "../../../../../types/user.type";
import { authApi } from "../../../../../api/authApi";
import { useMutation } from "@tanstack/react-query";

export default function RegisterForm() {
  const methods = useForm<Register>({
    defaultValues: {
      username: "john",
      email: "john@mail.com",
      password: "John@2002",
    },
    resolver: zodResolver(registerSchema),
  });

  const navigate = useNavigate();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (newUser: Register) => {
      return authApi.register(newUser);
    },
    onSuccess: () => {
      navigate("/");
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<Register> = async (data) => mutate(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="mb-8 flex flex-col gap-4">
          <InputContainer>
            <Label htmlFor="username">Username</Label>
            <Input
              variant="primary"
              id="username"
              name="username"
              placeholder="Enter your username..."
            />
            {errors.username && (
              <Message variant="error" className="mt-1">
                {errors.username.message}
              </Message>
            )}
          </InputContainer>

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

        <Button
          variant="primary"
          type="submit"
          disabled={isPending}
          className="mb-2"
        >
          Register
        </Button>

        {error && (
          <Message variant="error" className="mb-2">
            {error.message}
          </Message>
        )}

        <Link to="/login" className="mb-4 text-center text-zinc-400">
          Have an account?{" "}
          <span className="text-primary font-semibold">Login</span>
        </Link>
      </form>
    </FormProvider>
  );
}
