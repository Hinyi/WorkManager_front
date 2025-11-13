import Navbar from "@/components/Navbar/Navbar";
import { NavLink, Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";

const MainLayout = () => {
  return (
    <>
      {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
      {/* <Navbar /> */}
      <NavigationMenu className="flex max-w-screen w-screen justify-between px-4 border-b sm:px-6 lg:px-9">
        <NavLink to={"/"} className="mr-4">
          <img
            className="h-10 w-auto"
            src="/src/assets/logo.svg"
            alt="Workflow"
          />
        </NavLink>
        {/* <div className="flex justify-between items-center"> */}
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item one</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                cos toaaaaaaaaaaaaaaaaaaaaa
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        {/* </div> */}
        <div className="pl-4">
          <ModeToggle />
        </div>
      </NavigationMenu>
      {/* </ThemeProvider> */}
      <Outlet />
    </>
  );
};

export default MainLayout;
