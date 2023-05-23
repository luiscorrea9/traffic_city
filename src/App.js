import React from 'react';
import './App.css';
import Login from './login';
import { Routes, Route} from 'react-router-dom'
import Signup from './Signup';
import Contacts from './contacts';
import Home from './homepage';
import NavigationBar from './components/NavBar'
import Mapa from './mapa';

function App () {
    return (
      <div>
      
      
         <NavigationBar />


        <Routes>
            
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />}/>  
            <Route path='/contacts' element={<Contacts />}/>  
            <Route path='/' element={<Home />} />
            <Route path='/mapa' element={<Mapa />} />
             
        </Routes>
      </div>
    )
  }


  

export default App;
