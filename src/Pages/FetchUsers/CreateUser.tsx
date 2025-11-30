import { CreateUserRequestDTO } from "@/services/createUser.dto";
import { UserService } from "@/services/UserService";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CreateUser = () => {
  const { createUser } = UserService();
  const { register, handleSubmit, reset } = useForm<CreateUserRequestDTO>({
    defaultValues: {
      email: "",
      password: "Aaaaaaa!23",
      firstName: "aaaa",
      lastName: "aaaa",
      confirmPassword: "Aaaaaaa!23",
    },
  });
  const [loading, setLoading] = useState(false);

  const handleSubmitR = async (data: CreateUserRequestDTO) => {
    setLoading(true);
    console.log("form data:", data);
    const payload = { ...data, password: "a", confirmPassword: "a" };
    try {
      console.log("form data:", payload);
      const response = await createUser(data);
      alert(`User created! ID: ${response.id}`);
    } catch (error) {
      alert("Failed to create user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitR)}>
      <input type="email" placeholder="Email" {...register("email")} />
      <input type="password" placeholder="Password" {...register("password")} />
      <input
        type="password"
        placeholder="confirmpassword"
        {...register("confirmPassword")}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Sign Up"}
      </button>
    </form>
  );
};

export default CreateUser;

/**    const { createUser } = UserService();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [firstName, setfirstName] = useState("aaaa");
  // const [lastName, setlastName] = useState("aaaa");
  // const [confirmPassword, setconfirmPassword] = useState("");
  const [user, setUser] = useState<CreateUserRequestDTO>({
    email: "",
    password: "password",
    firstName: "aaaa",
    lastName: "aaaa",
    confirmPassword: "password",
  });
  const {register, handleSubmit, reset} = useForm<CreateUserRequestDTO>();
  const [loading, setLoading] = useState(false);

  const handleSubmitR = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log({ email, firstName, lastName, password, confirmPassword });
      const response = await createUser({
        email,
        firstName,
        lastName,
        password,
        confirmPassword,
      });
      alert(`User created! ID: ${response.id}`);
    } catch (error) {
      alert("Failed to create user");
    } finally {
      setLoading(false);
    }

    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setconfirmPassword(e.target.value)}
        placeholder="confirmpassword"
      />
      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Sign Up"}
      </button>
    </form>
 * 
 * 
 */
