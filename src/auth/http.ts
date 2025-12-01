// axios wrapper for GET, POST, etc. with auth token handling

import { api } from "./api";

export const POST = async <T>(url: string, body: any) => {
  const res = await api.post<T>(url, body);
  return res.data;
};

export const GET = async <T>(url: string) => {
  const res = await api.get<T>(url);
  return res.data;
};
