import { ThemeProvider } from "./components/theme-provider/theme-provider";
import { RoutingProvider } from "./routing/RoutingProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <RoutingProvider />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
