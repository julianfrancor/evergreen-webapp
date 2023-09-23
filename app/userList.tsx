'use client'
import React from 'react';
import './UserList.css';

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
    <div className="user-card-grid">
      {users.map((user, index) => (
        <div className="user-card" key={user.id}>
          <img className="user-avatar" src={user.photo} alt={`Avatar for ${user.name}`} />
          <div className="user-info">
            <div className="user-info-row">
              <div className="label">Username:</div>
              <div className="value">{user.username}</div>
            </div>
            <div className="user-info-row">
              <div className="label">Name:</div>
              <div className="value">{user.name}</div>
            </div>
            <div className="user-info-row">
              <div className="label">Last Name:</div>
              <div className="value">{user.last_name}</div>
            </div>
            <div className="user-info-row">
              <div className="label">User Type:</div>
              <div className="value">{user.user_type}</div>
            </div>
            <div className="user-info-row">
              <div className="label">Status:</div>
              <div className="value">{user.status}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
