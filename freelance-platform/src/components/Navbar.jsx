import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 


const Navbar = () => {
  return (
    <nav>
        <div className='logo-container'>
            <img src="src/components/logo.jpeg" alt="Logo" className="logo" />
        </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/publish">Publish Service</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
