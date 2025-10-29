import React from 'react'
import { User } from './UserList';

interface UserCardProps {
    user: User;
    onClick?: (user: User) => void;
}

export const UserCard = ({user, onClick}: UserCardProps) => {
  return (
<div 
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onClick?.(user)}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
          {user.name.charAt(0)}
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
          <p className="text-sm text-gray-500">ID: {user.id}</p>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-gray-600 text-sm">{user.email}</p>
        {user.phone && <p className="text-gray-600 text-sm">{user.phone}</p>}
        {user.website && <p className="text-gray-600 text-sm">{user.website}</p>}
      </div>
    </div>
  )
}
