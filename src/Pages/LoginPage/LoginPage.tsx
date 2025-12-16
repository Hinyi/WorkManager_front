import { LoginForm } from "@/components/LoginPage/login-form";
import React from "react";
import {
  loginCard,
  loginContainer,
  loginWrapper,
  styles,
} from "./login-page.styles";
import { LoginCredentials } from "@/auth/types";
import { useLogin } from "@/auth/hooks";

interface LoginPageProps {
  variant?: "dark" | "light";
}

const LoginPage = ({ variant = "dark" }: LoginPageProps) => {
  const loginService = useLogin();

  const onSubmit = (data: LoginCredentials) => {
    loginService.mutate(data);
  };

  return (
    <div className="justify-center items-center w-full h-full flex">
      <div className="">
        <div className="">
          <LoginForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// const LoginPage = () => {
//   return (
//     <div className="login-wrapper">
//       <div className="login-container">
//         <div className="login-card">
//           <LoginForm />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// const LoginPage = () => {
//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.container}>
//         <div className={styles.card}>
//           <LoginForm />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
