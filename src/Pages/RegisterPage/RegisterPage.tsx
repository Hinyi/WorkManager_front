import { SignupForm } from "@/components/SignUp/signup-form";
import { registerService } from "@/services/registerService/registerService";
import {
  RegisterRequestDTO,
  RegisterResponseDTO,
} from "@/services/registerService/registerServiceDTO";
import { useMutation } from "@tanstack/react-query";
import { GalleryVerticalEnd } from "lucide-react";
import React, { use } from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  // const {mutate, isPending, isError, isSuccess, data, error} = registerService();

  return (
    <div className="flex w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
  // return (
  //   <form
  //     onSubmit={handleSubmit(onSubmit)}
  //     className="flex flex-col gap-3 w-80"
  //   >
  //     <input
  //       type="text"
  //       placeholder="Name"
  //       {...register("firstName", { required: "Name is required" })}
  //     />
  //     {errors.firstName && <p>{errors.firstName.message}</p>}

  //     <input
  //       type="text"
  //       placeholder="Email"
  //       {...register("email", { required: "Email is required" })}
  //     />
  //     {errors.email && <p>{errors.email.message}</p>}

  //     <input
  //       type="password"
  //       placeholder="Password"
  //       {...register("password", { required: "Password is required" })}
  //     />
  //     {errors.password && <p>{errors.password.message}</p>}

  //     <input
  //       type="password"
  //       placeholder="Confirm Password"
  //       {...register("confirmPassword", { required: "Password is required" })}
  //     />
  //     {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

  //     <button type="submit" disabled={mutation.isLoading}>
  //       {mutation.isLoading ? "Registering..." : "Register"}
  //     </button>
  //   </form>
  // );
};

export default RegisterPage;
