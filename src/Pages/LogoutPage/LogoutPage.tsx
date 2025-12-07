import { useLogout } from "@/auth/hooks";
import { Spinner } from "@/components/ui/spinner";
import React, { useEffect } from "react";

const LogoutPage = () => {
  const logoutMutation = useLogout();

  useEffect(() => {
    logoutMutation.mutate();
  }, []);

  if (logoutMutation.isPending) {
    <Spinner className="size-20" />;
  }

  return <Spinner className="size-20" />;
};

export default LogoutPage;
