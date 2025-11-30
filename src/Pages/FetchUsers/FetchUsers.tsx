import { useState } from "react";
import { BASE_URL } from "@/xhr/urls";
import { GET } from "@/xhr/httpUtils";
import { Button } from "@/components/ui/button";
import { User } from "@/components/user/UserList";

type UserResponseDTO = {
  email: string;
  id: string;
  userName: string;
};

type UserRequestDTO = {
  // email: any;
};

interface FetchUsersProps {
  // server may return an array of users or a single user object
  userData: (
    options?: RequestInit,
    body?: UserRequestDTO
  ) => Promise<UserResponseDTO | UserResponseDTO[]>;
}

const useService = () => {
  const response: FetchUsersProps["userData"] = async (body) =>
    GET(`${BASE_URL}/api/users/getUsers`, body).then((res) => res.json());
  return { response };
};

const FetchUsers = () => {
  const { response } = useService();
  const [users, setUsers] = useState<UserResponseDTO[] | null>(null);
  const [errorText, setErrorText] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    if (isLoading) return; // prevent concurrent calls
    try {
      setIsLoading(true);
      // OPTION A: call without any body (no Content-Type and no body will be sent)
      // const result = await response();

      const result = await response();

      // Normalize result to an array for easy rendering
      if (Array.isArray(result)) {
        setUsers(result as UserResponseDTO[]);
      } else if (result && typeof result === "object") {
        setUsers([result as UserResponseDTO]);
      } else {
        // unexpected response format — show the whole thing for debugging
        setErrorText(String(result));
        setUsers(null);
      }
    } catch (err) {
      console.error(err);
      setErrorText((err as Error)?.message ?? "Failed to fetch user data");
      setUsers(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={fetchData} variant="outline" disabled={isLoading}>
        Fetch Users
      </Button>
      <div style={{ marginTop: 12 }}>
        {errorText && <div style={{ color: "red" }}>Error: {errorText}</div>}

        {users?.length ? (
          <div>
            <h4>Fetched users ({users.length}):</h4>
            <ul>
              {users.map((u) => (
                <li key={u.id}>
                  <strong>{u.userName}</strong> — {u.email} (id: {u.id})
                </li>
              ))}
            </ul>
          </div>
        ) : (
          !errorText && <div>No users loaded yet.</div>
        )}
      </div>
    </div>
  );
};

export default FetchUsers;
