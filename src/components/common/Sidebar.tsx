import { FormProvider, useForm } from "react-hook-form";

import ChatsList from "../features/chats/components/ChatsList";
import Icon from "./Icon";
import Input from "./Input";

export default function Sidebar() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <aside className="flex h-full flex-col gap-4">
        <Input
          name="search"
          variant="primary"
          width="full"
          placeholder="Search your contact..."
          rightIcon={<Icon name="search" className="text-primary stroke-3" />}
        />
        <ChatsList />
      </aside>
    </FormProvider>
  );
}
