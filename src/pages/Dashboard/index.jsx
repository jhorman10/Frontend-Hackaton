import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VotePage from './../VotePage';
import Voted from './../Voted';
import Results from './../Results';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import './style.css';

function Dashboard() {
  return (
    <div className="main-dashboard">
      <NavBar />
      <div className="main-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<VotePage />} />
            <Route path="/voted" element={<Voted />} />
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<VotePage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <SideBar />
      <Footer />
    </div>
  );
}

export default Dashboard;
