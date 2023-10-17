import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../StyleComponent/Login.css'

const Login = () => {
  const log_api = 'https://wtsacademy.dedicateddevelopers.us/api/user/signin';
  const navigate = useNavigate();

  const [inputState, setInput] = useState({
    email: '',
    pwd: '',
  });

  const changeHandler = (event) => {
    event.persist();
    const { name, value } = event.target;
    setInput({ ...inputState, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('Data submit:', inputState);

    const formData = new FormData();
    formData.append('email', inputState.email);
    formData.append('password', inputState.pwd);

    axios
      .post(log_api, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((res) => {
        console.log('API Response:', res);

        if (res.data.status === 200) {
          console.log('Login Successful');
          alert(res.data.message);

          // Store the token in session storage
          window.sessionStorage.setItem('token', res.data.token);
         window.sessionStorage.setItem('userEmail', inputState.email);
          // Redirect to the user's profile page
          navigate('/profile');
        } else {
          console.log(res.data.message);
          alert(res.data.message + '\n\nTry Again');
        }
      })
      .catch((err) => {
        console.log('Error to Login:', err);
        alert('Error to Login: ' + err);
      });
  };

  return (
    <div className='log-wrap'>
      <div className='log-add'>
        <h2 className='log-add-h4'>Login</h2>
        <form className='log-add-form' action='' onSubmit={submitHandler}>
          <input className='log-input'
            type='email'
            name='email'
            id=''
            placeholder='Your Email'
            onChange={changeHandler}
            autoComplete='off'
          />
          <br />
          <input className='log-input'
            type='password'
            name='pwd'
            id=''
            placeholder='Your Password'
            onChange={changeHandler}
            autoComplete='off'
          />
          <br />
          <span className='log--span'>
          <input className='log-sub' type='submit' value='Login' />
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
