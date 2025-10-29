import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { UserCard } from './styles';

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  website?: string;
}

export const UserList = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://localhost:7096/api/users/getUserByEmail?email=string%40w');
        if (!response.ok) throw new Error('Failed to fetch users');
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Users Directory</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map(user => (
            <UserCard 
              key={user.id} 
              user={user}
              onClick={(user) => console.log('Clicked:', user.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
