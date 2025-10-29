import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import HomePage from "@/scenes/HomePage/HomePage";
import Contact from "@/scenes/contact/Contact";
import LoginPage from "@/scenes/loginPage/loginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <div>Home</div>,
        path: "/",
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        element: <Contact />,
        path: "/contact",
      },
    ],
  },
]);

export const RoutingProvider = () => {
  return <RouterProvider router={router} />;
};
