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
