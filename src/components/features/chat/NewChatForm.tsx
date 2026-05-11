import {
  FormProvider,
  useForm,
  useWatch,
  type SubmitHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import Button from "../../common/Button";
import InputContainer from "../../common/InputContainer";
import Label from "../../common/Label";
import Input from "../../common/Input";
import Message from "../../common/Message";
import Select, { type Option } from "../../common/Select";

import { ChatType, type NewChat } from "../../../types/chat.type";
import { chatSchema } from "../../../schemas/chat.schema";
import { chatsApi } from "../../../api/chatsApi";
import { queryClient } from "../../../main";
import type { User } from "../../../types/user.type";
import toast from "react-hot-toast";

const options: Option[] = [
  {
    value: ChatType.Direct,
    text: "Direct",
  },
  {
    value: ChatType.Group,
    text: "Group",
  },
];

type Props = {
  onCancel: () => void;
};

export default function NewChatForm({ onCancel }: Props) {
  const methods = useForm<NewChat>({
    defaultValues: {
      type: ChatType.Direct,
      name: "",
      recipientEmail: "",
    },
    resolver: zodResolver(chatSchema),
    resetOptions: {
      keepDirtyValues: false,
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const watchedType = useWatch({
    control: control,
    name: "type",
  });

  const { mutate, isPending, error } = useMutation({
    mutationFn: chatsApi.newChat,
    onSuccess: (data) => {
      toast.success(data.message);
    },
  });

  const user = queryClient.getQueryData<User>(["user"]);

  const onSubmit: SubmitHandler<NewChat> = (data) => {
    mutate({
      ...data,
      name: watchedType === ChatType.Group ? data.name : null,
      recipientEmail:
        watchedType === ChatType.Direct ? data.recipientEmail : null,
      createdBy: watchedType === ChatType.Group && user ? user.id : null,
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-primary xs:w-xs flex w-full flex-col rounded-md border-2 p-4"
      >
        <h2 className="text-primary mb-4 text-xl">Start a new chat!</h2>
        <div className="mb-8 flex flex-col gap-4">
          <InputContainer>
            <Label htmlFor="type">Type</Label>
            <Select variant="primary" id="type" name="type" options={options} />
            {errors.type && (
              <Message variant="error" className="mt-1">
                {errors.type.message}
              </Message>
            )}
          </InputContainer>

          {watchedType === ChatType.Direct && (
            <InputContainer>
              <Label htmlFor="recipientEmail">Recipient Email</Label>
              <Input
                variant="primary"
                id="recipientEmail"
                name="recipientEmail"
                placeholder="Enter the recipient email..."
              />
              {errors.recipientEmail && (
                <Message variant="error" className="mt-1">
                  {errors.recipientEmail.message}
                </Message>
              )}
            </InputContainer>
          )}

          {watchedType === ChatType.Group && (
            <InputContainer>
              <Label htmlFor="name">Name</Label>
              <Input
                variant="primary"
                id="name"
                name="name"
                placeholder="Enter your name..."
              />
              {errors.name && (
                <Message variant="error" className="mt-1">
                  {errors.name.message}
                </Message>
              )}
            </InputContainer>
          )}
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="secondary"
            width="full"
            type="button"
            disabled={isPending}
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            width="full"
            type="submit"
            disabled={isPending}
          >
            New chat!
          </Button>
        </div>

        {error && (
          <Message variant="error" className="mt-2">
            {error.message}
          </Message>
        )}
      </form>
    </FormProvider>
  );
}
