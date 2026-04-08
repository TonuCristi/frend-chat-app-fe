import {
  useState,
  type DetailedHTMLProps,
  type InputHTMLAttributes,
} from "react";

import Input from "./Input";
import Icon from "./Icon";

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string;
};

export default function TogglePasswordInput(props: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Input
      {...props}
      type={isOpen ? "text" : "password"}
      width="auto"
      variant="primary"
      rightIcon={isOpen ? <Icon name="eyeClosed" /> : <Icon name="eye" />}
      onRightIconClick={() => setIsOpen((prev) => !prev)}
    />
  );
}
