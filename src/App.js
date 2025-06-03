import React from 'react'
import HomePage from './pages/HomePage';
import Documentation from './pages/Documentation';
import {Route, Routes } from "react-router-dom";
import './App.css';

function App(){
  return(
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/documentation' element={<Documentation />}/>
      </Routes>
    </div> 
  );
}

export default App;