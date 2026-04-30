import type { AxiosResponse } from "axios";

import { apiClient } from "../config/apiClient";
import type { Register } from "../types/user.type";

const URL = "/api/auth";

export const authApi = {
  register(newUser: Register) {
    return apiClient
      .post(`${URL}/auth/register`, newUser)
      .then(({ data }: AxiosResponse<{ message: string }>) => data.message);
  },
  login() {
    return apiClient
      .post(`${URL}/auth/login`)
      .then(({ data }: AxiosResponse<{ message: string }>) => data.message);
  },
};
