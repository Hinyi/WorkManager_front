import { Button } from "@/components/ui/button";
import { GET } from "@/xhr/httpUtils";
import { BASE_URL } from "@/xhr/urls";
import React, { useState } from "react";

async function loadUsers() {
  return await GET(`${BASE_URL}/api/users/getUsers`).then((res) => res.json());
}

const GetUsers = () => {
  const useService = loadUsers();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const data = await useService;
    setUsers(data);
    console.log(data);
  };
  return (
    <div>
      <Button onClick={fetchUsers} variant="outline">
        Load Users
      </Button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetUsers;
