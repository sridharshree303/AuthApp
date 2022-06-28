import React, { useState } from 'react';
import UserData from '../models/UserData';
import axios from 'axios';
// import {useNavigate } from 'react-router-dom';

const Register = () => {

    const [userData,setUserData] = useState(new UserData());

    const handleUserRegister = (e) =>{
      setUserData({
        ...userData,
        [e.target.name]:e.target.value
      })
    };

  const submitHandleRegister = (e) =>{
    e.preventDefault();
      axios.post('http://localhost:8082/user/register',userData).then(
        (response)=>{
          console.log(response.data);
          alert('You are registered suceesfully..')
        }
      ).catch((error)=>{
        console.log(error.response);
        alert('Enter proper details..')
      });
    }

  

  return (
    <div className="container">
      <h1  className='display-5 text-center m-4'>Register Component</h1>
      <div className='row card card-body form-group align-items-left'>
        <div className='col-sm col-md-8 col-lg-7 offset-1'>
        <form onSubmit={submitHandleRegister}>
          <div className= 'align-items-center'>
            <label htmlFor="firstname" className='col-3'>First Name </label>&nbsp;
            <input 
                className="form-control col-6"
                type="text"
                id="firstname"
                name="firstname"
                value={userData.firstname}
                onChange={handleUserRegister}
                placeholder="Enter First Name" /></div>
            <br/>
            <div>
            <label htmlFor="lastname" className='col-3'>Last Name </label>&nbsp;
            <input type="text"
                className="form-control col-6"
                id="lastname"
                name="lastname"
                value={userData.lastname}
                onChange={handleUserRegister}
                placeholder="Enter Last name" /></div>
            <br/>
            <label htmlFor="email" className='col-3'>Email </label>&nbsp;
            <input type='email' className="form-control col-6"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleUserRegister}
                placeholder="Enter Email" />
            <br/>
            <label htmlFor="username" className='col-3'> User Name </label>&nbsp;
            <input type="text" className="form-control col-6"
                id="username"
                name="username"
                value={userData.username}
                onChange={handleUserRegister}
                placeholder="Enter username" />
            <br/>
            <label htmlFor="password" className='col-3'> Password </label>&nbsp;
            <input type="password" className="form-control col-6"
                id="password"
                name="password"
                value={userData.password}
                onChange={handleUserRegister}
                placeholder="Enter Password" />
            <br/>
            <label htmlFor="mobileNumber" className='col-3'> Mobile No </label>&nbsp;
            <input type="text" className="form-control col-6"
                id="mobileNumber"
                name="mobileNumber"
                value={userData.mobileNumber}
                onChange={handleUserRegister}
                placeholder="Enter Mobile Number" />
            <br/>
            <input className='col-2 offset-2 btn-sm btn btn-outline-primary' type="submit" value="Submit"/>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Register;
