import { BASE_URL } from "@/xhr/urls";
import axios from "axios";
import { authService } from "./authService";

export const api = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  // You can add authorization headers or other custom headers here
  // const token = localStorage.getItem('token');
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config;

    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;

      try {
        const newToken = await authService.refreshToken();

        localStorage.setItem("accessToken", newToken.accessToken);
        original.headers.Authorization = `Bearer ${newToken}`;

        return api(original);
      } catch (err) {
        console.error("Token refresh failed:", err);

        localStorage.removeItem("accessToken");
        // window.location.href = "/login";

        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);
