import React from 'react';
import './style.css';

function NavBar(setIsLog) {
  const handleClick = () => {
    setIsLog(false);
  };
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <a className="brand-logo">Logo</a>
        <h2>Elecciones 2022</h2>
        <button className="logout-button" onClick={handleClick}>
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
