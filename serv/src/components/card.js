import React from 'react';

export function Card({ imageSrc, title }) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="card-content">
        <h1>{title}</h1>
      </div>
    </div>
  );
}
