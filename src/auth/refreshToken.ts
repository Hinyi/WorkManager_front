import axios from "axios";
import { BASE_URL } from "@/xhr/urls";
import { RefreshResponse } from "./types";

export async function refreshToken(): Promise<RefreshResponse> {
  const res = await axios.post(
    `${BASE_URL}/api/auth/refreshToken`,
    {},
    {
      withCredentials: true,
    }
  );
  return res.data.accessToken;
}
