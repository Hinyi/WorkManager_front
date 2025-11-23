import { ThemeProvider } from "./components/theme-provider/theme-provider";
import { RoutingProvider } from "./routing/RoutingProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<MainLayout />}>
  //       <Route index element={<HomePage />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/contact" element={<Contact />} />
  //       <Route path="/user" element={<UserList />} />
  //     </Route>
  //   )
  // );
  // return <RouterProvider router={router} />;
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <RoutingProvider />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
