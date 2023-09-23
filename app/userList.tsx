'use client'
import React, { useRef } from 'react';
import './UserListStyles.css';

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
    
    const carouselRef = useRef(null);
  
    const scroll = (direction:any) => {
      const carousel = carouselRef.current;
      if (carousel) {
        carousel.scrollBy({
          left: direction === 'left' ? -300 : 300,
          behavior: 'smooth'
        });
      }
    }

  return (

    <div className="user-carousel">
      <div className="user-card-container" ref={carouselRef}>
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
      <button className="carousel-button left" onClick={() => scroll('left')}>&lt;</button>
      <button className="carousel-button right" onClick={() => scroll('right')}>&gt;</button>
    </div>
  );
}

export default UserList;
