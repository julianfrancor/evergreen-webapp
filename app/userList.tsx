'use client'
import React from 'react';

interface User {
  last_name: string;
  name: string;
  user_type: string;
  status: string;
  id: number;
  username: string;
  password: string;
  photo: string;
}

interface UserListProps {
  users: User[];
}

function UserList({ users }: UserListProps) {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={user.id}>
            <div>Username: {user.username}</div>
            <div>Name: {user.name}</div>
            <div>Last Name: {user.last_name}</div>
            <div>User Type: {user.user_type}</div>
            <div>Status: {user.status}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
