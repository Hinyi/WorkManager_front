import { api } from "./api";
import { LoginCredentials, AuthResponse, User, RefreshResponse } from "./types";

export const authService = {
  // login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
  //   const { data } = await api.post<AuthResponse>("/auth/login", credentials);
  //   return data;
  // },

  // logout: async (): Promise<void> => {
  //   await api.post("/auth/logout");
  // },

  // getCurrentUser: async (): Promise<User> => {
  //   const { data } = await api.get<{ user: User }>("/auth/me");
  //   return data.user;
  // },

  refreshToken: async (): Promise<RefreshResponse> => {
    const { data } = await api.post<RefreshResponse>("/auth/refreshToken");
    return data;
  },
};
