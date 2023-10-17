import React, { useState } from 'react';
import '../../StyleComponent/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

const Navbar = () => {
  const handleLogin = () => {
    window.open("/adminlogin", "_blank");
  };
  const navigate = useNavigate();

  //check If user is logged in or not
  const valid_token = window.sessionStorage.getItem("token");

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/">
            <h1 className="logo">
              <span className="col">Sm</span>ovix
            </h1>
          </Link>
        </div>
        <div className="menu-container">
          <div className="dropdown"
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
            >

            <Link className="all-movie" to="/movie">Movies</Link>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/hollywood">Hollywood</Link>
                <Link to="/bollywood">Bollywood</Link>
                <Link to="/popular-movie">Popular</Link>
              </div>
            )}
          </div>
        </div>
        <Link className="search-nab" to="/about-us">AboutUs</Link>
        <Link className="search-nab" to="/search">Search</Link>
        <div className="profile-container">

          <div className="admin-container">
            <div className="admin-box">
          <div className="dropdown"
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
            >

            <Link className="admin" ><AdminPanelSettingsIcon size="20px" color="white" />Admin</Link>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/adminlogin">Login</Link>
                <Link to="/adminlogout">Logout</Link>
              </div>
            )}
          </div>
        </div>
          </div>


          <div className="profile-text-container">
            <div className="user-container">
          <div className="dropdown"
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
            >

            <Link className="user" ><SupervisedUserCircleIcon size="20px" color="white" />User</Link>
            {valid_token ? (
              isDropdownOpen && (
                <div className="dropdown-content">
                  <Link to="/profile">Profile</Link>
                  <Link to="/register">Register</Link>
                  <Link to="/login">LogIn</Link>
                  <Link to="/logout">LogOut</Link>
                </div>
              )
            ) : (
              isDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/register">Register</Link>
                <Link to="/login">LogIn</Link>
              </div>
            ))}
            
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
