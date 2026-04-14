import type { AxiosResponse } from "axios";

import { apiClient } from "../config/apiClient";

const URL = "/api/auth";

export const authApi = {
  login() {
    return apiClient
      .post(`${URL}/login`)
      .then(({ data }: AxiosResponse<{ token: string }>) => data.token);
  },
};
