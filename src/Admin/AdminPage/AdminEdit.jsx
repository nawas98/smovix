import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminEdit.css';

const AdminEdit = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Open the "Admin Login" link in a new tab
    window.open("/adminlogin", "_blank");
  };

  return (
    <div>
      <div>
        <div className="admin-menu">
          <ul className="admin-menu-list">
            <button className="admin-menu-list-add"><Link to="/adding-movie">Add</Link></button>
            <button className="admin-menu-list-delete"><Link to="/movie-delete">Delete</Link></button>
            <br/>
            <button className="admin-menu-list-logout" onClick={handleLogout}>Logout</button>
            <br/>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminEdit;
