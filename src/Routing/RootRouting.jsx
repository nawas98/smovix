import React from 'react'
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';

import Home from '../Component/Home/Home';
import Navbar from '../Layout/Navbar/Navbar';
import HollyWood from '../Component/Movie/HollyWood';
import BollyWood from '../Component/Movie/BollyWood';
import MovieView from '../Component/MovieView/MovieView';
import AbountUs from '../Component/AboutUs/AbountUs';
import PopularMovie from '../Component/Movie/PopularMovie';
import AddMovies from '../Component/AddMovies/AddMovies';
import DeleteMovie from '../Component/DeleteMovies/DeleteMovie';
import Movies from '../Component/Movie/Movie';
import MoviesSearch from '../Component/Search/MoviesSearch';
import Footer from '../Layout/Footer/Footer';
import AdminEdit from '../Admin/AdminPage/AdminEdit';
import Review from '../Component/Movie/MovieReview/Review';
import AdminLogin from '../Admin/AdminLogin/AdminLogin';
import Login from '../User/Login';
import Registration from '../User/Registration';
import UserProfile from '../User/UserProfile';
import AdminLogout from '../Admin/AdminLogout/AdminLogout';
import Logout from '../User/Logout';

const RootRouting = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="movie" element={<Movies />} />
          <Route path="bollywood" element={<BollyWood />} />
          <Route path="hollywood" element={<HollyWood />} />
          <Route path="popular-movie" element={<PopularMovie />} />
          <Route path="view-movie-details/:id" element={<MovieView />} />
          <Route path="about-us" element={<AbountUs />} />
          <Route path="adding-movie" element={<AddMovies />} />
          <Route path="movie-delete" element={<DeleteMovie />} />
          <Route path="movies/:mid" element={<Movies />} />
          <Route path="search" element={<MoviesSearch />} />
          <Route path="adminedit" element={<AdminEdit />} />
          <Route path="adminlogin" element={<AdminLogin/>} />
          <Route path="adminlogout" element={<AdminLogout/>} />
          <Route path="movie-review/:m_id/:m_title" element={<Review />} />

          <Route path="register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="logout" element={<Logout />} />
          
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default RootRouting;
