import { AxiosError, type AxiosResponse } from "axios";

import { apiClient } from "../config/apiClient";
import type { Chat, ChatQueryParams, NewChat } from "../types/chat.type";

const URL = "/api/chats";

export const chatsApi = {
  async newChat(newChat: NewChat) {
    try {
      const res = (await apiClient.post(URL, newChat)) as AxiosResponse<{
        chat: Chat;
        message: string;
      }>;

      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const data = error.response?.data as { message: string };

        throw new Error(data.message);
      }

      throw error;
    }
  },
  async getChats(queryParams: ChatQueryParams) {
    try {
      const res = (await apiClient.get(URL, {
        params: queryParams,
      })) as AxiosResponse<{
        chats: Chat[];
      }>;

      return res.data.chats;
    } catch (error) {
      if (error instanceof AxiosError) {
        const data = error.response?.data as { message: string };

        throw new Error(data.message);
      }

      throw error;
    }
  },
};
