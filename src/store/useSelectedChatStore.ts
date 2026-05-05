import { create } from "zustand";

import type { Chat } from "../types/chat.type";

type SelectedChatState = {
  selectedChat: Chat | null;
  setSelectedChat: (chat: Chat | null) => void;
};

export const useSelectedChatStore = create<SelectedChatState>((set) => ({
  selectedChat: null,
  setSelectedChat: (selectedChat) => set({ selectedChat }),
}));
