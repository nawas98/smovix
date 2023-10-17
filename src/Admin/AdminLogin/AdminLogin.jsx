import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../StyleComponent/AdminLogin.css';

const AdminLogin = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  let navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/admin')
      .then((response) => response.json())
      .then((data) => {
        const existingUser = data.find(
          (user) =>
            user.email === loginData.email && user.password === loginData.password
        );

        if (existingUser) {
          localStorage.setItem('username', existingUser.username);
          navigate('/adminedit');
          alert('Login successful!');
        } else {
          console.log('Invalid email or password!');
          alert('You entered the wrong email or password');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <>
      <form className="login-form"   onSubmit={submitHandler}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={changeHandler}
          required
          autoComplete="off" // Add this attribute to disable autocomplete
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={changeHandler}
          required
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default AdminLogin;
