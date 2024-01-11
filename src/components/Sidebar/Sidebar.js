// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import your styles
import logo from '../../assets/logo.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='upperitems'>
      <div className="logo"> <img src={logo} alt='butter' /> </div>
      <Link to="/">
          <i className="fas fa-search"></i> 
        </Link>
      </div>

      <div className="nav-items">
        <Link to="/">
          <i className="fas fa-home"></i> 
        </Link>
        <Link to="/news">
          <i className="fas fa-newspaper"></i> 
        </Link>
        <Link to="/list">
          <i className="fas fa-list"></i> 
        </Link>
        <Link to="/user">
          <i className="fas fa-user"></i> 
        </Link>
      </div>

      <div className="bottom-icons">
        <i className="fas fa-bell"></i> {/* Notification icon */}
        <i className="fas fa-arrow-left"></i> {/* Back icon */}
      </div>
    </div>
  );
}

export default Sidebar;
