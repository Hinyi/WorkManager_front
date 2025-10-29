import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

const MainLayout = () => {
  return (
    <>
      {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
        <Navbar />
        <Outlet />
      {/* </ThemeProvider> */}
    </>
  );
};

export default MainLayout;
