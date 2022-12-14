import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './components/Card';
import SecurityMsn from './../components/SecurityMsn';
import candidates from './../components/data/candidates.json';
import msn from './../components/data/msn.json';
import './style.css';

function VotePage() {
  const [isActive, setIsActive] = useState(false);
  let navigate = useNavigate();

  const handleClickVote = () => {
    navigate('/voted');
  };

  const handleSelectCandidate = (candidate) => {
    setIsActive(true);
  };

  const handleClickRestart = () => {
    setIsActive(false);
  };
  return (
    <div className="main-vote">
      <div className="security-msn-container">
        <SecurityMsn msn={msn} />
      </div>
      <div className="vote-container">
        <Card
          candidates={candidates}
          isActive={isActive}
          handleSelectCandidate={handleSelectCandidate}
        />
      </div>
      <div className="buttons-vote-container">
        <button type="button" className="vote-button" onClick={handleClickVote}>
          Votar
        </button>
        <button
          type="button"
          className="restart-button"
          onClick={handleClickRestart}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default VotePage;
