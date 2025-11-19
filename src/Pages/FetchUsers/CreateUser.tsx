import { UserService } from "@/services/UserService";
import React, { useState } from "react";

const CreateUser = () => {
  const { createUser } = UserService();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("aaaa");
  const [lastName, setlastName] = useState("aaaa");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
  );
};

export default CreateUser;
