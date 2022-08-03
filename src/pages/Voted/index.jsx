import React from 'react';
import SecurityMsn from '../components/SecurityMsn';
import msn from './../components/data/msn.json';
import voted from './../components/data/voted.json';

import './style.css';

function Voted() {
  let [regist] = voted;
  let { img, title, description, name, lastname, date } = regist;
  return (
    <div className='voted-component'>
      <div className='secure-msn'>
        <SecurityMsn msn={msn} />
      </div>
      <div className="voted-container">
        <div className="voted-img">
          <img src={img} alt={img} />
        </div>
        <div className="voted-desc">
          <h2>{title}</h2>
          <h3>{description}</h3>
        </div>
        <div className='voted-info'>
          <p>
            Nombre completo: {name} {lastname}
          </p>
          <p>Fecha y hora: {date}</p>
          <button>Generar certificado</button>
        </div>
      </div>
    </div>
  );
}

export default Voted;
