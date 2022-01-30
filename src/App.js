import React, {useState, useEffect} from 'react'
import Home from './Pages/Home/Home';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Products from './Pages/Products/Products';

import Menu from './Components/Menu/Menu';

function App() {
  
  return (
    <>
  <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/" element={<Home />} />

    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
