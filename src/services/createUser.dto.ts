export type CreateUserRequestDTO = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
};

export type CreateUserResponseDTO = {
  id: string;
};
