import React from "react";
import Cards from "./components/Cards";
import orlando from './images/orlando.png';
import camilo from './images/camilo.png';
import luis from './images/luis.png';
import samuel from './images/samuel.png';


function contacts() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center px-5 p-4">
      <div className="d-flex justify-content-center">
        <div className="px-5 mb-4">
          <Cards message="Luis Correa"  description="lcorrea6@cuc.edu.co" image={luis} />
        </div>
        <div className="px-5 mb-4">
          <Cards message="Camilo Mejia" image={camilo} description="cmejia16@cuc.edu.co"  />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="px-5 mb-4">
        <Cards message="Orlando Reyes" image={orlando} description="oreyes@cuc.edu.co" />
        </div>
        <div className="px-5 mb-4">
          <Cards message="Samuel Mejia" image={samuel} description="smejia19@cuc.edu.co"/>
        </div>
      </div>
    </div>
  );
}

export default contacts;