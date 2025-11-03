import { LoginForm } from "@/components/loginPage/login-form";
import React from "react";
import { loginCard, loginContainer, loginWrapper, styles } from "./login-page.styles";

interface LoginPageProps {
  variant?: "dark" | "light";
}

const LoginPage = ({variant = "dark"}: LoginPageProps) => {
  return (
    <div className="flex justify-center items-center min-h-svh w-full">
      <div>
        <div>
          <LoginForm />
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

