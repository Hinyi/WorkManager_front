import { useAuth } from "@/auth/AuthContext";
import React, { use } from "react";

export const AvatarSection = () => {
  const user = useAuth().user?.UserName;
  console.log("AvatarSection user:", user);
  return <div>Hello, {user}!</div>;
};
