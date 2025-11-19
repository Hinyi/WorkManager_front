import { POST } from "@/xhr/httpUtils";
import { CreateUserRequestDTO, CreateUserResponseDTO } from "./createUser.dto";
import { BASE_URL } from "@/xhr/urls";

interface IUserService {
  createUser: (body: CreateUserRequestDTO) => Promise<CreateUserResponseDTO>;
}

export const UserService = (): IUserService => {
  const createUser: IUserService["createUser"] = async (body) =>
    POST(`${BASE_URL}/api/users`, body).then((res) => res.json());
  return { createUser };
};
