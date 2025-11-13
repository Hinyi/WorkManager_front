import Navbar from "@/components/Navbar/Navbar";
import { CardFooter, CardHeader } from "@/components/ui/card";

const MainLayout = () => {
  return (
    <>
      <div className="bg-background/22">
        <CardHeader>
          <Navbar />
        </CardHeader>
        <CardFooter className="justify-center border-t ">
          <p className="text-sm text-muted-foreground">
            © 2024 WorkManager. All rights reserved.
          </p>
        </CardFooter>
      </div>
    </>
  );
};

export default MainLayout;
