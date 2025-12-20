import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { registerService } from "@/services/registerService/registerService";
import {
  RegisterRequestDTO,
  RegisterResponseDTO,
} from "@/services/registerService/registerServiceDTO";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const navigate = useNavigate();
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

  const mutation = useMutation<RegisterResponseDTO, Error, RegisterRequestDTO>({
    mutationFn: async (data: RegisterRequestDTO) => {
      const service = await registerService();
      return service.registerUser(data);
    },
    onSuccess: (data) => {
      alert("Registration successful!");
      navigate("/");
      console.log("Registered user data:", data.id);
    },
    onError: (error) => {
      alert("Registration failed!");
      console.error("Registration error:", error);
    },
  });

  const onSubmit = (data: RegisterRequestDTO) => {
    mutation.mutate(data);
  };

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                id="name"
                type="text"
                placeholder="John"
                required
                {...register("firstName")}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="lastName">LastName</FieldLabel>
              <Input
                id="lastName"
                type="text"
                placeholder="Doe"
                required
                {...register("lastName")}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                {...register("email")}
              />
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                required
                {...register("password")}
              />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input
                id="confirm-password"
                type="password"
                required
                {...register("confirmPassword")}
              />
              <FieldDescription>Please confirm your password.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit">Create Account</Button>
                {/* <Button variant="outline" type="button">
                  Sign up with Google
                </Button> */}
                <FieldDescription className="px-6 text-center">
                  Already have an account? <a href="/login">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
