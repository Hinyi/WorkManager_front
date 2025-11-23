import { BASE_URL } from "@/xhr/urls";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CreateUserQueryRequestDTO {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

interface CreateUserQueryResponseDTO {
  Token: string;
}

const useCreateUser = () => {
  return useMutation<
    //CreateUserQueryResponseDTO,
    string,
    Error,
    CreateUserQueryRequestDTO
  >({
    mutationFn: async (body) => {
      const payload = {
        ...body,
        password: "YourHardCodedPassword",
        lastName: "DefaultLastName",
        confirmPassword: "YourHardCodedPassword",
      };

      const response = await fetch(`${BASE_URL}/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      //return response.json();
      return response.text();
    },
  });
};

export default function CreateUserQuery() {
  const { mutate, isPending, isError, isSuccess, error, data } =
    useCreateUser();
  const { register, handleSubmit, reset } =
    useForm<CreateUserQueryRequestDTO>();

  const onSubmit = (data: CreateUserQueryRequestDTO) => {
    mutate(data, {
      onSuccess: () => {
        alert("User created successfully!");
        reset();
      },
      onError: () => {
        alert("Failed to create user.");
      },
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Card className="p-6 space-y-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              {...register("firstName")}
              id="firstName"
              placeholder="John"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email")}
              id="email"
              type="email"
              placeholder="john@example.com"
              required
            />
          </div>

          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? "Saving..." : "Submit"}
          </Button>
        </form>

        {isSuccess && data && (
          <Card className="bg-green-50 p-4 mt-4">
            <h4 className="font-semibold text-green-700">✔️ User Created</h4>
            <p>
              <strong>Token:</strong> {data}
            </p>
          </Card>
        )}

        {isError && (
          <Card className="bg-red-50 p-4 mt-4">
            <p className="text-red-700">❌ {error.message}</p>
          </Card>
        )}
      </Card>
    </div>
  );
}
