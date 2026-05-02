import { AxiosError, type AxiosResponse } from "axios";

import { apiClient } from "../config/apiClient";
import type { Login, Register, UserResponse } from "../types/user.type";

const URL = "/api/auth";

export const authApi = {
  async register(newUser: Register) {
    try {
      const res = (await apiClient.post(
        `${URL}/register`,
        newUser,
      )) as AxiosResponse<{ message: string }>;

      return res.data.message;
    } catch (error) {
      if (error instanceof AxiosError) {
        const data = error.response?.data as { message: string };

        throw new Error(data.message);
      }

      throw error;
    }
  },
  async login(user: Login) {
    try {
      const res = (await apiClient.post(
        `${URL}/login`,
        user,
      )) as AxiosResponse<{ message: string }>;

      return res.data.message;
    } catch (error) {
      if (error instanceof AxiosError) {
        const data = error.response?.data as { message: string };

        throw new Error(data.message);
      }

      throw error;
    }
  },
  async logout() {
    try {
      const res = (await apiClient.post(`${URL}/logout`)) as AxiosResponse<{
        message: string;
      }>;

      return res.data.message;
    } catch (error) {
      if (error instanceof AxiosError) {
        const data = error.response?.data as { message: string };

        throw new Error(data.message);
      }

      throw error;
    }
  },
  async getLoggedUser() {
    try {
      const res = (await apiClient.get(
        `${URL}/me`,
      )) as AxiosResponse<UserResponse>;

      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const data = error.response?.data as { message: string };

        throw new Error(data.message);
      }

      throw error;
    }
  },
};
