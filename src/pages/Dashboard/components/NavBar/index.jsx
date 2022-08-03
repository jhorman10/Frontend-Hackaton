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
  return (
    <nav className='navbar'>
      <div className="nav-wrapper">
        <img className="brand-logo" src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/30.User-512.png" alt="profile" />
        <p>Está votando desde esta dirección {account}</p>
        <button>Cerrar Sesión</button>
      </div>
    </nav>
  )
}

export default NavBar