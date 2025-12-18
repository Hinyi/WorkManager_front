import { Footer } from "@/components/MainLayout/Footer";
import Navbar from "@/components/MainLayout/Navbar";
import { CardFooter, CardHeader } from "@/components/ui/card";
import { useActiveSection } from "@/hooks/useActiveSection";
import ScrollToHash from "@/lib/ScrollToHash";
import { Scroll } from "lucide-react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const activeSection = useActiveSection();
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="bg-background/22">
          <header>
            <Navbar activeSection={activeSection} />
          </header>
        </div>
        <ScrollToHash />
        <main className="flex-1 flex items-center justify-center">
          <Outlet />
        </main>
        <div className="border-t">
          <div>
            {/* <div className="fixed bottom-0 w-full bg-background/22 justify-center px-24 border-t py-10"> */}
            <Footer />
            <CardFooter className="justify-center p-0">
              <p className="text-sm text-muted-foreground md:text-base py-4">
                © 2025 WorkManager. All rights reserved.
              </p>
            </CardFooter>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
