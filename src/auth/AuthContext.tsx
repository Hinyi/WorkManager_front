import { ReactNode, useEffect, useState, useRef } from "react";
import { LoginCredentials, LoginResponse, User } from "./types";
import { api } from "./api";

import { createContext, useContext } from "react";
import { AuthContextType } from "./types";

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext)!;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });
  // Start with false if token exists (already logged in), true if not
  const [isLoading, setIsLoading] = useState<boolean>(true); //() => {
  // return !localStorage.getItem("accessToken");
  // });

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    console.log("AuthProvider useEffect - token:", token);

    if (!token) {
      setIsLoading(false);
      return;
    }

    if (token) {
      fetchUser(); // true = isInitialLoad
      console.log("Fetching user data on AuthProvider mount");
    } else {
      setIsLoading(false);
      console.log("No token found, setting isLoading to true");
    }
  }, []);

  const fetchUser = async (): Promise<void> => {
    try {
      const { data } = await api.get<User>("/auth/me");
      console.log("Fetched user data:", data);
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      setIsLoading(false);
    } catch (error) {
      console.log("Fetch user error:", error);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      setUser(null);
    }
  };

  const login = async (
    credentials: LoginCredentials
  ): Promise<LoginResponse> => {
    const { data } = await api.post<LoginResponse>("/auth/login", credentials);
    console.log("AuthProvider login data:", data);
    localStorage.setItem("accessToken", data.token);
    // Fetch user data after successful login (don't reset loading state)
    await fetchUser();
    return data;
  };

  const logout = async (): Promise<void> => {
    try {
      await api.post("/auth/revokeToken");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
