import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav w-100">
          <li className="nav-item flex-grow-1">
            <a className="traffic-title navbar-brand text-primary" href="/"><strong><i class="fa-solid fa-car"></i> Traffic City </strong></a>
          </li>
          <li className="nav-item flex-grow-1">
            <a className="nav-link text-primary" href="/">Home</a>
          </li>
          
          <li className="nav-item flex-grow-1">
            <a className="nav-link text-primary" href="/contacts">About us</a>
          </li>
          <li className="nav-item flex-grow-1">
            <a className="nav-link text-primary" href="/mapa">mapa</a>
          </li>
          <li className="nav-item flex-grow-1">
            <a className="nav-link text-primary" href="/login">Sign In</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  )
}

export default NavigationBar;
