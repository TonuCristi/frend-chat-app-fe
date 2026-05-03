import { useForm, FormProvider } from "react-hook-form";

import Icon from "../../common/Icon";
import Button from "../../common/Button";
import Input from "../../common/Input";
import EmojiButton from "./EmojiButton";

export default function MessageInput() {
  const methods = useForm({
    defaultValues: {
      message: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <div className="border-primary flex items-center gap-4 rounded-md border-2 p-2">
        <Input name="message" width="full" placeholder="Write a message..." />
        <Button>
          <Icon name="send" className="text-primary ml-auto stroke-3 text-xl" />
        </Button>
        <EmojiButton />
      </div>
    </FormProvider>
  );
}
