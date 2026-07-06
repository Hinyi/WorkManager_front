import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  UserDTO,
  GetUsersRequestDTO,
  GetUsersResponseDTO,
  loadUsersAxios,
} from "@/services/users.service";

const GetUsers = () => {
  const [users, setUsers] = useState<UserDTO[]>([]);
  const [total, setTotal] = useState(0);

  const fetchUsers = async () => {
    try {
      // Typed request DTO
      const request: GetUsersRequestDTO = {
        page: 1,
        limit: 10,
        role: "admin",
      };

      // Typed response DTO
      const response: GetUsersResponseDTO = await loadUsersAxios(request);

      console.log("Registered user data:", response.users);

      setUsers(response.users);
      setTotal(response.total);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };

  return (
    <div>
      <Button onClick={fetchUsers} variant="outline">
        Load Users
      </Button>
      <p>Total: {total}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.email} — {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetUsers;
