import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { RoutingProvider } from "./routing/RoutingProvider";
import MainLayout from "./layout/MainLayout";
import About from "./scenes/about/About";
import Contact from "./scenes/contact/Contact";
import { UserList } from "./scenes/user/UserList";
import HomePage from "./scenes/HomePage/HomePage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<UserList />} />
      </Route>
    )
  );
  // return <RouterProvider router={router} />;
  return <RoutingProvider />;
};

export default App;
