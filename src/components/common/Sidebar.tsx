import { FormProvider, useForm } from "react-hook-form";

import ChatsList from "../features/chats/components/ChatsList";
import Icon from "./Icon";
import Input from "./Input";
import ChatsFilter from "../features/chats/components/ChatsFilter";
// import { useInfiniteQuery } from "@tanstack/react-query";
// import { chatsApi } from "../../api/chatsApi";

export default function Sidebar() {
  const methods = useForm({
    defaultValues: {
      search: "",
      type: "all",
    },
  });

  // const {
  //   data,
  // } = useInfiniteQuery({
  //   queryKey: ['projects'],
  //   queryFn: ({ pageParam }) => chatsApi.getChats({page: pageParam, perPage: 15}),
  //   initialPageParam: 1,
  //   getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  // })

  return (
    <FormProvider {...methods}>
      <aside className="flex h-full flex-col gap-4 overflow-hidden">
        <Input
          name="search"
          variant="primary"
          width="full"
          placeholder="Search your contact..."
          rightIcon={<Icon name="search" className="text-primary stroke-3" />}
        />
        <ChatsFilter />
        <ChatsList />
      </aside>
    </FormProvider>
  );
}
