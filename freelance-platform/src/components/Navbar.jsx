import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import Dock from './Dock/Dock';

  const items = [
    { icon: <Link to="/"><p>Home</p></Link>, label: 'Home' },
    { icon: <Link to="/publish"> <p>Publish</p></Link>, label: 'Archive' },
  ];

 
const Navbar = () => {
  return (
     <Dock 
    items={items}
    panelHeight={68}
    baseItemSize={50}
    magnification={70}
  />
  );
};

export default Navbar;
