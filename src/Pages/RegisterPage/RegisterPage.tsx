import { registerService } from "@/services/registerService/registerService";
import { RegisterRequestDTO } from "@/services/registerService/registerServiceDTO";
import { useMutation } from "@tanstack/react-query";
import React, { use } from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  // const {mutate, isPending, isError, isSuccess, data, error} = registerService();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRequestDTO>({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "aaaa",
      password: "Aaaaaaa",
      confirmPassword: "Aaaaaaa",
    },
  });

  const mutation = useMutation<unknown, unknown, RegisterRequestDTO>({
    mutationFn: async (data: RegisterRequestDTO) => {
      const service = await registerService();
      return service.registerUser(data);
    },
    onSuccess: (data) => {
      alert("Registration successful!");
    },
    onError: (error) => {
      alert("Registration failed!");
    },
  });

  const onSubmit = (data: RegisterRequestDTO) => {
    mutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 w-80"
    >
      <input
        type="text"
        placeholder="Name"
        {...register("firstName", { required: "Name is required" })}
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: "Email is required" })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: "Password is required" })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword", { required: "Password is required" })}
      />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterPage;
