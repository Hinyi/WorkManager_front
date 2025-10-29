import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import HomePage from "@/Pages/HomePage/HomePage";
import Contact from "@/components/contact/Contact";
import LoginPage from "@/Pages/LoginPage/LoginPage";
import { About } from "@/components/about/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <div>Home</div>,
        path: "/",
      },
      // {
      //   path: "/login",
      //   element: <LoginPage />,
      // },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        element: <Contact />,
        path: "/contact",
      },
      {
        element: <About />,
        path: "/about",
      },
    ],
  },
  { 
    path: "/login", 
    element: <LoginPage /> 
  },
]);

export const RoutingProvider = () => {
  return <RouterProvider router={router} />;
};
