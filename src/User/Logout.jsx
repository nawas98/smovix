import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../StyleComponent/Logout.css'

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token and user email from session storage (or wherever you store them)
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('userEmail');

    // Navigate the user to the login page
    navigate('/login');
  };

  return (
    <div className='logout'>
        <p>Are you sure you want to log out as an User?</p>
        <button  className='logout-button' onClick={handleLogout}>Logout</button>
      </div>
  );
};

export default Logout;
