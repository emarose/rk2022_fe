import React from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';


function Menu() {
  return <>
  <nav>
    <ul>
      <Link to="/">Home</Link>
      <Link to="/customers">Customers</Link>
      <Link to="/products">Products</Link>
    </ul>
  </nav>


    
  </>;
}

export default Menu;
