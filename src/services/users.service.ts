import { GET } from "@/auth/http";
import { BASE_URL } from "@/xhr/urls";

// Request DTO — what you send to the API
export type GetUsersRequestDTO = {
  page?: number;
  limit?: number;
  role?: "admin" | "user";
};

// Response DTO — what the API sends back
export type UserDTO = {
  id: string;
  email: string;
  role: "admin" | "user";
  createdAt: string;
};

export type GetUsersResponseDTO = {
  users: UserDTO[];
  total: number;
  page: number;
};

export async function loadUsersAxios(
  params: GetUsersRequestDTO,
): Promise<GetUsersResponseDTO> {
  const data = await GET(`${BASE_URL}/api/users/getUsers`);
  console.log("API response:", data);
  //   return await GET(`${BASE_URL}/api/users/getUsers`, { params });
  return data;
}
