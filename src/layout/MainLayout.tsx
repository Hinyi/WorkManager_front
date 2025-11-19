import { Footer } from "@/components/MainLayout/footer/Footer";
import Navbar from "@/components/MainLayout/Navbar/Navbar";
import { CardFooter, CardHeader } from "@/components/ui/card";
import { Children } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="bg-background/22">
          <CardHeader>
            <Navbar />
          </CardHeader>
        </div>
        <main className="flex-1">
          <Outlet />
        </main>
        <div className="border-t">
          <div>
            {/* <div className="fixed bottom-0 w-full bg-background/22 justify-center px-24 border-t py-10"> */}
            <Footer />
            <CardFooter className="justify-center">
              <p className="text-sm text-muted-foreground">
                © 2024 WorkManager. All rights reserved.
              </p>
            </CardFooter>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
