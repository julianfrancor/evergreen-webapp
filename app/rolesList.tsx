'use client'
import React, { useRef } from 'react';
import './roleListStyles.css';

interface Role {
  id: string;
  role: string;
  description: string;
}

interface RoleListProps {
  roles: Role[];
}

  function RoleList({ roles }: RoleListProps) {
    
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: string) => {
      const carousel = carouselRef.current;
      if (carousel) {
        (carousel as HTMLDivElement).scrollBy({
          left: direction === 'left' ? -300 : 300,
          behavior: 'smooth'
        });
      }
    }

  return (

    <div className="role-carousel">
      <div className="role-card-container" ref={carouselRef}>
      {roles.map((role, index) => (
        <div className="role-card" key={role.id}>
          <div className="role-info">
            <div className="role-info-row">
              <div className="label">Role Id:</div>
              <div className="value">{role.id}</div>
            </div>
            <div className="role-info-row">
              <div className="label">Name:</div>
              <div className="value">{role.role}</div>
            </div>
            <div className="role-info-row">
              <div className="label">Description:</div>
              <div className="value">{role.description}</div>
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

export default RoleList;
