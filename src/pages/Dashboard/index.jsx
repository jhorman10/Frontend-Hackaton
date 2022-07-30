import React from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import './style.css';

function Dashboard() {
  return (
    <div className="main-dashboard">
      <NavBar />
      {/**
       * aqui va el contenido de la pagina
       */}
      <SideBar />
      <Footer />
    </div>
  );
}

export default Dashboard;
