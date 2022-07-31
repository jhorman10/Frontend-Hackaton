import React from 'react';
import './style.css';

function SecurityMsn({ msn: [MSN] }) {
  let { securityMsn, img } = MSN;
  return (
    <div className="msn-security-container">
      <img className="img-security" src={img} alt={img} />
      <p className="p-security">{securityMsn}</p>
    </div>
  );
}

export default SecurityMsn;
