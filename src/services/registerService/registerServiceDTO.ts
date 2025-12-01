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
