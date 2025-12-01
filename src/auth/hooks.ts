import {
  useQuery,
  UseQueryResult,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "./api";
import { useAuth } from "./AuthContext";
import { AuthResponse, LoginCredentials } from "./types";

export const useLogin = (): UseMutationResult<
  AuthResponse,
  AxiosError,
  LoginCredentials
> => {
  const { login } = useAuth();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("Login successful", data.user);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      console.error("Login failed:", error.response?.data?.message);
    },
  });
};

// src/hooks/useLogout.ts
export const useLogout = (): UseMutationResult<void, AxiosError, void> => {
  const { logout } = useAuth();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      console.log("Logout successful");
    },
  });
};

interface ProtectedData {
  id: string;
  title: string;
  content: string;
}

export const useProtectedQuery = (): UseQueryResult<
  ProtectedData[],
  AxiosError
> => {
  return useQuery({
    queryKey: ["protectedData"],
    queryFn: async () => {
      const { data } = await api.get<ProtectedData[]>("/protected/data");
      return data;
    },
    enabled: true, // Only fetch when user is authenticated
  });
};
