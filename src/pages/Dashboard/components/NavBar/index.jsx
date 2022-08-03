<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import './style.css'
import Web3 from 'web3';

function NavBar() {
  const [account, setAccount] = useState();
  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts();
      
      setAccount(accounts[0]);
    }
    
    load();
   }, []);
=======
import React from 'react';
import './style.css';

function NavBar(setIsLog) {
  const handleClick = () => {
    setIsLog(false);
  };
>>>>>>> 282e48edb459d3aa488cd49b556def3069b9c74b
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
<<<<<<< HEAD
        <img className="brand-logo" src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/30.User-512.png" alt="profile" />
        <p>Está votando desde esta dirección {account}</p>
        <button>Cerrar Sesión</button>
=======
        <a className="brand-logo">Logo</a>
        <h2>Elecciones 2022</h2>
        <button className="logout-button" onClick={handleClick}>
          Cerrar sesión
        </button>
>>>>>>> 282e48edb459d3aa488cd49b556def3069b9c74b
      </div>
    </nav>
  );
}

export default NavBar;
