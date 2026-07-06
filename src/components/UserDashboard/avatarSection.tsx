import { useAuth } from "@/auth/AuthContext";
import React, { use } from "react";

export const AvatarSection = () => {
  const auth = useAuth(); //.user?.UserName;
  console.log("AvatarSection user:", auth.user);
  return <div>Hello, {auth.user?.userName}!</div>;
};
