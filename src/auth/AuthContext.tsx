import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  AuthContextType,
  AuthResponse,
  LoginCredentials,
  LoginResponse,
  User,
} from "./types";
import { api } from "./api";

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext)!;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      fetchUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  const fetchUser = async (): Promise<void> => {
    try {
      const { data } = await api.get<User>("/auth/me");
      console.log("Fetched user data:", data);
      setUser(data);
      console.log("user data:", data);
    } catch (error) {
      console.log("user data:", error);
      localStorage.removeItem("accessToken");
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (
    credentials: LoginCredentials
  ): Promise<LoginResponse> => {
    const { data } = await api.post<LoginResponse>("/auth/login", credentials);
    console.log("AuthProvider login data:", data);
    console.log("breakpoint");
    localStorage.setItem("accessToken", data.token);
    // const userData = await api.get<{ user: User }>("/auth/me");
    // setUser(userData.data.user);
    // await fetchUser();
    return data;
  };

  const logout = async (): Promise<void> => {
    try {
      await api.post("/auth/revokeToken");
    } finally {
      localStorage.removeItem("accessToken");
      setUser(null);
    }
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
