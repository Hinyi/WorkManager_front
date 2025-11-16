import React, { useState } from "react";
import { BASE_URL } from "@/xhr/urls";
import { POST } from "@/xhr/httpUtils";
import { Button } from "@/components/ui/button";

interface FetchUsersProps {
  userData: (body: { email: string }) => Promise<{ token: string }>;
}

const useService = () => {
  const url = BASE_URL;
  const response: FetchUsersProps["userData"] = async (body) =>
    POST(`${url}/auth/login`, body).then((res) => res.json());
  return { response };
};

const FetchUsers = () => {
  const { response } = useService();
  const [data, setData] = useState<string | null>(null);

  const fetchData = async () => {
    const result = await response({ email: "string@w" });
    setData(result.token);
  };
  return (
    <div>
      <button onClick={fetchData}>
        <Button variant="outline">Fetch Users</Button>
      </button>
      <div>{data}</div>;
    </div>
  );
};

export default FetchUsers;
