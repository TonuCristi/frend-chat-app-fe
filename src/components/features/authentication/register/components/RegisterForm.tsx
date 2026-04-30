import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Label from "../../../../common/Label";
import Input from "../../../../common/Input";
import TogglePasswordInput from "../../../../common/TogglePasswordInput";
import Button from "../../../../common/Button";
import Message from "../../../../common/Message";
import InputContainer from "../../../../common/InputContainer";
import { Link } from "react-router";
import { useMutation } from "@tanstack/react-query";

import { registerSchema } from "../../../../../schemas/register.schema";
import type { Register } from "../../../../../types/user.type";
import { authApi } from "../../../../../api/authApi";

const inputs = [
  {
    id: "username",
    name: "username",
    type: "text",
    placeholder: "Enter your username...",
    label: "Username",
  },
  {
    id: "email",
    name: "email",
    type: "text",
    placeholder: "Enter your email...",
    label: "Email",
  },
] as const;

export default function RegisterForm() {
  const methods = useForm<Register>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const mutation = useMutation({
    mutationFn: (newUser: Register) => {
      return authApi.register(newUser);
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<Register> = (data) => {
    mutation.mutate(data);
    // console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="mb-8 flex flex-col gap-4">
          {inputs.map(({ id, name, type, placeholder, label }) => (
            <InputContainer key={id}>
              <Label htmlFor={id}>{label}</Label>
              <Input
                variant="primary"
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
              />
              {errors[name] && (
                <Message type="error" className="mt-1">
                  {errors[name].message}
                </Message>
              )}
            </InputContainer>
          ))}

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

        <Button variant="primary" type="submit" className="mb-2">
          Register
        </Button>

        <Link to="/login" className="mb-4 text-center text-zinc-400">
          Have an account?{" "}
          <span className="text-primary font-semibold">Login</span>
        </Link>
      </form>
    </FormProvider>
  );
}
