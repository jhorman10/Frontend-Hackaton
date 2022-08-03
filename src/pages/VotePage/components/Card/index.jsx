import React from 'react';
import './style.css';

function Card({candidates}, isActive, handleSelectCandidate) {
  return (
    <div className='cards'>
      {candidates.map(({img, name, lastName, partido}, index) => {
        return (
          <div className={`card-main${isActive ? '-active' : null}`} onClick={handleSelectCandidate} key={index}>
            <div className="card-image">
              <img src={img} alt={name} width={200} height={200}/>
            </div>
            <div className="card-content">
              <h3>{name} {lastName}</h3>
              <h4>{partido}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
