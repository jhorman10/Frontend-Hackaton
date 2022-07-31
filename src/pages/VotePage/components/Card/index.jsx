import React from 'react';
import './style.css';

function Card({candidates}) {
  return (
    <div className='cards'>
      {candidates.map(({img, name, lastName}, index) => {
        return (
          <div className="card-main" key={index}>
            <div className="card-image">
              <img src={img} alt={name} />
            </div>
            <div className="card-content">
              <h3>{name} - {lastName}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
