import { Link, NavLink, Outlet } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/theme-provider/mode-toggle";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import { IsMobile } from "@/hooks/is_mobile_hook";
import { Button } from "@/components/ui/button";
// import { useAuth } from "@/auth/AuthContext";
import { useAuth } from "@/auth/AuthContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import clsx from "clsx";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

const Navbar = ({ activeSection }: { activeSection: string }) => {
  const isMobile = IsMobile();
  console.log("isMobile:", isMobile);
  const { user, isLoading } = useAuth();
  console.log("navar", user);

  // const activeSection = useActiveSection();

  // if (isLoading) return <Button />;
  return (
    <>
      <div className="w-full px-4 py-2 flex items-center justify-between">
        <NavLink to={"/"} className="mr-4">
          <img
            className="h-15 w-auto"
            src="/src/assets/logo.svg"
            alt="Workflow"
          />
        </NavLink>
        <NavigationMenu viewport={isMobile}>
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/#hero-section"
                        className={clsx(activeSection === "hero")}
                      >
                        <div className="font-medium">Homepage</div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/#product-viewer"
                        className={clsx(activeSection === "product-viewer")}
                      >
                        <div className="font-medium">Product Viewer</div>
                        <div className="text-muted-foreground">
                          Learn how to use the library.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/#page-section"
                        className={clsx(activeSection === "page-section")}
                      >
                        <div className="font-medium">Blog</div>
                        <div className="text-muted-foreground">
                          Read our latest blog posts.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger>List</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="#">
                        <div className="font-medium">Components</div>
                        <div className="text-muted-foreground">
                          Browse all components in the library.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="#">
                        <div className="font-medium">Documentation</div>
                        <div className="text-muted-foreground">
                          Learn how to use the library.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="#">
                        <div className="font-medium">Blog</div>
                        <div className="text-muted-foreground">
                          Read our latest blog posts.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <Button variant="ghost" size="" className="hidden md:block">
              <NavLink to="/user">User</NavLink>
            </Button>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-2">
          {/* <div>toggle</div> */}

          <Button variant="outline" type="button">
            {user ? (
              <Link to="/logout">Log out</Link>
            ) : (
              <Link to="/login">Log In</Link>
            )}
          </Button>
          <ModeToggle />
        </div>
      </div>
      {/* </ThemeProvider> */}
      {/* <Outlet /> */}
    </>
  );
};

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <div>
          <NavLink to={href}>
            <div className="text-sm leading-none font-medium">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          </NavLink>
        </div>
      </NavigationMenuLink>
    </li>
  );
}

export default Navbar;
