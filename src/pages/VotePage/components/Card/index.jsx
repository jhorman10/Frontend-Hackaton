import React from 'react';
import './style.css';

function Card({candidates}, isActive, handleSelectCandidate) {
  console.log(isActive);
  return (
    <div className='cards'>
      {candidates.map(({img, name, lastName}, index) => {
        return (
          <div className={`card-main${isActive ? '-active' : null}`} onClick={handleSelectCandidate} key={index}>
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
