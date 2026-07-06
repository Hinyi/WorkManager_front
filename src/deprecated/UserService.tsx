import { POST } from "@/xhr/httpUtils";
import { BASE_URL } from "@/xhr/urls";

export type CreateUserRequestDTO = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

export type CreateUserResponseDTO = {
  id: string;
};

interface IUserService {
  createUser: (body: CreateUserRequestDTO) => Promise<CreateUserResponseDTO>;
}

export const UserService = (): IUserService => {
  const createUser: IUserService["createUser"] = async (body) =>
    POST(`${BASE_URL}/api/users`, body).then((res) => res.json());
  return { createUser };
};
