import { RoutingProvider } from "./routing/RoutingProvider";


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
  return <RoutingProvider />;
};

export default App;
