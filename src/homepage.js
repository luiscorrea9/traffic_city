import React from 'react';
import './traffic.css';
import { Link } from "react-router-dom";

const TrafficPage = () => {
  return (
    <div className="traffic-page container text-left">
      <div className="row">
        <div className="col-md-6 d-flex flex-column align-items-start justify-content-center">
          <h1 className="traffic-heading mb-4 mt-5"><strong>Welcome to Traffic city page, register with us right now!</strong></h1>
          <h3 className="traffic-body mb-4">
            Traffic city is a page that allows you to identify the right route no matter where you are. 
            It doesn't matter if it's raining or snowing, we take care of making your way easier! <i class="fa-solid fa-location-dot"></i> 
          </h3>
          <div className="button-container d-flex justify-content-center">
          <Link to="/login" className="btn btn-primary">Get Started</Link>
          <Link to="/contacts" className="btn btn-primary">Contact Us</Link>

          </div>
        </div>
        <div className="col-md-6">
          <img src="https://media.istockphoto.com/id/1309772688/es/vector/concepto-de-servicio-de-entrega-en-l%C3%ADnea-seguimiento-de-pedidos-en-l%C3%ADnea-entrega-a-domicilio.jpg?s=612x612&w=0&k=20&c=Jbb71KEChJAyflMHGj6pc9elxS-MDU8h1Bc387KslVo=" alt="Imagen de ejemplo" className="img-fluid img-large" />
        </div>
      </div>
    </div>
  );
};

export default TrafficPage;

