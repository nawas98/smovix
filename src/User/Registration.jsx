import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../StyleComponent/Registration.css'

const Registration = () => {
  let reg_api = 'https://wtsacademy.dedicateddevelopers.us/api/user/signup';
  const navigate = useNavigate();

  let [inputState, setInput] = useState({
    first_name: '',
    last_name: '',
    email: '',
    pwd: '',
  });

  let [imgState, setImgState] = useState();

  let changeHandler = (event) => {
    event.persist();
    let { name, value } = event.target;
    setInput({ ...inputState, [name]: value });
  };

  let submitHandler = (event) => {
    event.preventDefault();
    console.log('Data submit:', inputState);
    console.log('img Data:', imgState);

    let formData = new FormData();
    formData.append('first_name', inputState.first_name);
    formData.append('last_name', inputState.last_name);
    formData.append('email', inputState.email);
    formData.append('password', inputState.pwd);
    formData.append('profile_pic', imgState);

    axios
      .post(reg_api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((res) => {
        alert('You have registered successfully!');
        //console.log('Add res:', res);
        navigate('/login');
      })
      .catch((err) => {
        alert('Error to Register:', err);
        console.log('Add err:', err);
      });
  };

  return (
    <div className='reg-wrap'>
      <div className='reg-add'>
        <h4 className='reg-add-h4'>Register </h4>
        <form action='' onSubmit={submitHandler}>
          <input className='registration-add-input'
            type='text'
            name='first_name' 
            id=''
            placeholder='First Name'
            onChange={changeHandler}
          />{' '}
          <br />
          <input className='registration-add-input'
            type='text'
            name='last_name'  
            id=''
            placeholder='Last Name'
            onChange={changeHandler}
          />{' '}
          <br />
          <input className='registration-add-input'
            type='email'
            name='email'  
            id=''
            placeholder='Your Email'
            onChange={changeHandler}
          />{' '}
          <br />
          <input className='registration-add-input'
            type='password'
            name='pwd'  
            id=''
            placeholder='Your Password'
            onChange={changeHandler}
          />{' '}
          <br />
          <input className='registration-add-input'
            type='file'
            name='pic'
            id=''
            onChange={(e) => setImgState(e.target.files[0])}
            accept='image/*'
          />{' '}
          <br />
          <input className='reg-add-register' type='submit' value='Register'/>
        </form>
      </div>
    </div>
  );
};

export default Registration;

