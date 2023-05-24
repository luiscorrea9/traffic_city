import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import './styleMapa.css';


function Mapa() {
  const [ubicacion, setUbicacion] = useState('');
  const [coordenadas, setCoordenadas] = useState({ lat: 0, lng: 0 });

  const handleInputChange = (event) => {
    setUbicacion(event.target.value);
  };

  const handleMostrarMapa = () => {
    // Geocodificación de la ubicación ingresada
    Geocode.fromAddress(ubicacion)
      .then((response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setCoordenadas({ lat, lng });
      })
      .catch((error) => {
        console.error('Error al obtener las coordenadas:', error);
      });
  };

  return (
    
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="mapContainer" style={{ position: 'relative' }}>
        <div className="inputContainer text-dark p-3 border border-dark shadow" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1' }}>
          <input
            type="text"
            value={ubicacion}
            onChange={handleInputChange}
            placeholder="Ingrese una ubicación"
            className="input"
          />
          <button className="button">
            Mostrar el mapa
          </button>  
          <button className="button">
            Búsquedas Favoritas
          </button>  
          <button onClick={handleMostrarMapa} className="button">
            Ver el historial
          </button>
        </div>
        <LoadScript googleMapsApiKey="AIzaSyB5gMwN5Yqk9Tg42vJT1E2_y1_0oXr-tpg">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%', marginTop: '0px' }}
            zoom={8} 
            center={{lat: 10.995466213819826, lng:-74.78976034564387}}
          >
            {coordenadas.lat !== 0 && coordenadas.lng !== 0 && (
              <Marker position={coordenadas} />
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
  
  
  
}

export default Mapa;

