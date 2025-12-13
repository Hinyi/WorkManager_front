import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import HomePage from "@/Pages/HomePage/HomePage";
import Contact from "@/components/HomePage/contact/Contact";
import LoginPage from "@/Pages/LoginPage/LoginPage";
import { About } from "@/components/HomePage/about/About";
import { Docs } from "@/components/HomePage/docs/Docs";
import NotFoundPage from "@/Pages/NotFoundPage/NotFoundPage";
import FetchUsers from "@/Pages/FetchUsers/FetchUsers";
import GetUsers from "@/Pages/FetchUsers/GetUsers";
import CreateUser from "@/Pages/FetchUsers/CreateUser";
import CreateUserQuery from "@/Pages/FetchUsers/CreateUserQuery";
import RegisterPage from "@/Pages/RegisterPage/RegisterPage";
import LogoutPage from "@/Pages/LogoutPage/LogoutPage";
import { ProtectedRoute } from "@/Pages/ProtectedRoute/ProtectedRoute";
import UserProfile from "@/Pages/UserDashboard/UserDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <HomePage />,
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
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/User",
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        ),
      },
    ],
  },

  {
    path: "/logout",
    element: <LogoutPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/docs",
    element: <Docs />,
  },
  // {
  //   path: "/fetch",
  //   element: <FetchUsers />,
  // },
  {
    path: "/getUsers",
    element: (
      <ProtectedRoute>
        <GetUsers />
      </ProtectedRoute>
    ),
  },
  // {
  //   path: "/CreateUser",
  //   element: <CreateUser />,
  // },
  // {
  //   path: "/CreateUser2",
  //   element: <CreateUserQuery />,
  // },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export const RoutingProvider = () => {
  return <RouterProvider router={router} />;
};
