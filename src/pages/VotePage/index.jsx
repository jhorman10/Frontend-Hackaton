import React from 'react';
import Card from './components/Card';
import SecurityMsn from './components/SecurityMsn';
import candidates from './components/data/candidates.json';
import msn from './components/data/msn.json';
import './style.css';

function VotePage() {
  return (
    <div className="main-vote">
      <div className="security-msn-container">
        <SecurityMsn msn={msn} />
      </div>
      <div className="vote-container">
        <Card candidates={candidates} />
      </div>
    </div>
  );
}

export default VotePage;
