import { POST } from "@/auth/http";

export type RegisterRequestDTO = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

export type RegisterResponseDTO = {
  id: string;
};

interface IRegisterService {
  registerUser: (body: RegisterRequestDTO) => Promise<RegisterResponseDTO>;
}

export const registerService = async (): Promise<IRegisterService> => {
  const registerUser = (body: RegisterRequestDTO) =>
    POST<RegisterResponseDTO>(`/api/users`, body);

  return { registerUser };
};
