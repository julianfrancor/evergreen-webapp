'use client'
import React, { useRef } from 'react';
import './moduleListStyles.css';

interface Module {
  id: string;
  name: string;
  description: string;
  module_type: string;
}

interface ModuleListProps {
  modules: Module[];
}

  function ModuleList({ modules }: ModuleListProps) {
    
    const carouselRef = useRef<HTMLDivElement>(null); // Make sure to specify the type

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

    <div className="module-carousel">
      <div className="module-card-container" ref={carouselRef}>
      {modules.map((module, index) => (
        <div className="module-card" key={module.id}>
          <div className="module-info">
            <div className="module-info-row">
              <div className="label">Module Id:</div>
              <div className="value">{module.id}</div>
            </div>
            <div className="module-info-row">
              <div className="label">Name:</div>
              <div className="value">{module.name}</div>
            </div>
            <div className="module-info-row">
              <div className="label">Description:</div>
              <div className="value">{module.description}</div>
            </div>
            <div className="module-info-row">
              <div className="label">module Type:</div>
              <div className="value">{module.module_type}</div>
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

export default ModuleList;
