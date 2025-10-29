import { LoginForm } from "@/components/loginPage/login-form";
import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-svh w-full bg-gray-700">
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 rounded-md">
        <div className="w-full max-w-sm bg-white">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
