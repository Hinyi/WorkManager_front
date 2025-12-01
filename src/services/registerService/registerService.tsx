import { POST } from "@/auth/http";
import { RegisterRequestDTO, RegisterResponseDTO } from "./registerServiceDTO";

interface IRegisterService {
  registerUser: (body: RegisterRequestDTO) => Promise<RegisterResponseDTO>;
}

export const registerService = async (): Promise<IRegisterService> => {
  const registerUser = (body: RegisterRequestDTO) =>
    POST<RegisterResponseDTO>(`/api/users`, body);

  return { registerUser };
};
