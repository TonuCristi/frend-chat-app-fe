import { FormProvider, useForm } from "react-hook-form";

import Label from "../../../../common/Label";
import Input from "../../../../common/Input";
import InputContainer from "../../../../common/InputContainer";
import TogglePasswordInput from "../../../../common/TogglePasswordInput";
import Button from "../../../../common/Button";

export default function LoginForm() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input
              variant="primary"
              name="email"
              placeholder="Enter your email..."
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">Password</Label>
            <TogglePasswordInput
              name="password"
              placeholder="Enter your password..."
            />
          </InputContainer>
        </div>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </form>
    </FormProvider>
  );
}
