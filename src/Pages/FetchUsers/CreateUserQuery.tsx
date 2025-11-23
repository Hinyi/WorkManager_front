import { BASE_URL } from "@/xhr/urls";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface CreateUserQueryRequestDTO {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

const useCreateUser = () => {
  return useMutation({
    mutationFn: async (body: CreateUserQueryRequestDTO) => {
      const response = await fetch(`${BASE_URL}/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      return response.text();
    },
  });
};

export default function CreateUserQuery() {
  const { mutate, isPending, isError, isSuccess, error } = useCreateUser();
  const { register, handleSubmit, reset } =
    useForm<CreateUserQueryRequestDTO>();
  const [responseToken, setResponseToken] = useState<string>("");

  const onSubmit = (data: CreateUserQueryRequestDTO) => {
    mutate(data, {
      onSuccess: (response) => {
        setResponseToken(response);
        alert("User created successfully!");
        reset();
      },
      onError: () => {
        setResponseToken("");
        alert("Failed to create user.");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="Name" required />
      <input {...register("email")} placeholder="Email" type="email" required />
      <input
        type="password"
        {...register("password")}
        value="YourHardCodedPassword"
        readOnly
        hidden
      />
      <input
        {...register("lastName")}
        value="YourHardCodedPassword"
        readOnly
        hidden
      />
      <input
        type="password"
        {...register("confirmPassword")}
        value="YourHardCodedPassword"
        readOnly
        hidden
      />

      <button type="submit" disabled={isPending}>
        {isPending ? "Saving..." : "Submit"}
      </button>

      {isSuccess && (
        <div style={{ marginTop: 10 }}>
          <h4>✔️ Response:</h4>
          <pre>
            <data value={responseToken}>{responseToken}</data>
          </pre>
        </div>
      )}
      {isError && <p>❌ {error.message}</p>}
    </form>
  );
}
