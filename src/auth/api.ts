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
        console.log("REFRESHING TOKEN");
        const newToken = await authService.refreshToken();
        console.log("REFRESH RETURNED", newToken);
        localStorage.setItem("accessToken", newToken.token);
        // set the refreshed token on the original request headers
        if (original.headers) {
          original.headers.Authorization = `Bearer ${newToken.token}`;
        }

        return api(original);
      } catch (err) {
        console.error("Token refresh failed:", err);

        localStorage.removeItem("accessToken");
        // Safe redirect outside React hooks
        try {
          window.location.href = "/login";
        } catch {
          // ignore
        }

        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);
