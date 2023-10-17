import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../StyleComponent/AdminLogout.css'

const AdminLogout = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    // Clear the user data or token from local storage or session storage
    localStorage.removeItem('username'); // Remove the username

    // Redirect to the login page or any other desired route
    navigate('/adminlogin');
  };

  return (
    <>
      <div className='logout'>
        <p>Are you sure you want to log out as an admin?</p>
        <button  className='logout-button' onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default AdminLogout;