import Header from './Header';
import React, {useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {

  const [userdata,setUserData] = useState({
    userid : 0,
    name:"",
    email:"",
    username:"",
    password:"",
    mobileNumber:""
  });

  const [isSubmit,setIsSubmit] = useState(false);
  const [errors,setErrors] = useState({});
  const [credentials, setCredentials] = useState('');
  const [resData,setResData] = useState({});

  const changeHandler = (event) =>{
    setUserData({
      ...userdata,
      [event.target.name]: event.target.value
    })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8082/user/login',userdata)
      .then((response)=>{
          console.log(response.data);
          sessionStorage.setItem('isUserLoggedIn',true);
          alert('Successful');
          setIsSubmit(true);
          setErrors({});
          // window.location.assign("/dashboard");
      }).catch((error)=>{
        setResData(error.response);
        sessionStorage.setItem('isUserLoggedIn',false);
        sessionStorage.clear(0);
        console.log(error.response);
        setCredentials("Enter proper credentials.");
      });
      
  }


  return (
    <div className='App' style={{"backgroundColor":"rgb(11, 25, 28)"}}>
      <Header/>
      <p className='text-white'>{JSON.stringify(resData.status)}</p>
      <Container fluid id="containerpad">
      <div className='container-fluid App' id="loginalign">
      {/* <h1 className='display-4 p-4 text-center text-white'>Login</h1> */}
      <div className='row pb-5'>
        <div className='col-8 col-md-6 offset-md-3 offset-lg-4 col-lg-4 offset-2'>
        <div>
          
            <form onSubmit={submitHandler} className="row card pt-2 pb-3 " >
            <div>
            <h1 className='text-center font-weight-bold text-primary' id="headstyle">Login</h1>
              {Object.keys(errors).length === 0 && isSubmit ? (
                  <div id="suces" className="card bg-light col-6 col-sm-6 col-lg-6 mt-1 mb-2 offset-3 text-center"> 
                    <b>Login successful</b></div>
                  ) : ( " "
              )}
            </div>
            
            {/* <div className="col-10  offset-1 pb-2">
                <label htmlFor="email" className=" form-label h6">Email:</label>
                <input type="email" 
                    className=" form-control" 
                    id="email" 
                    // required= {true}
                    name="email"
                    value={userdata.email}
                    autoComplete="off"
                    onChange={""}/>
                  <small className="text-danger">{errors.email}</small>
             </div> */}

             <div className="col-10  offset-1 pb-2">
                <label htmlFor="username" className=" form-label h6">Username:</label>
                <input type="text" 
                    className=" form-control" 
                    id="username" 
                    // required= {true}
                    name="username"
                    value={userdata.username}
                    autoComplete="off"
                    onChange={changeHandler}/>
                  <small className="text-danger">{errors.username}</small>
             </div>

             <div className="col-10  offset-1 pb-2  ">
                <label htmlFor="password" className=" form-label h6">Password:</label>
                <input type="password" 
                    className=" form-control" 
                    id="password" 
                    // required= {true}
                    name="password"
                    value={userdata.password}
                    autoComplete="off"
                    onChange={changeHandler}/>
                    <small className="text-danger">{errors.password}</small>
             </div>

              <div className='row offset-1'>
                 <input className='btn btn-primary mt-2 mb-2 p-2 col-10 font-weight-bold' type="submit" value="Login"/>
                 <small className='text-center col-10 p-1 font-weight-bold'>Dont't have an account ? <Link to="/registerone">Sign Up</Link></small> 
                 <small className='text-center col-10 pb-2 font-weight-bold'>Forgot Password ? <Link to="/registerone">Click here</Link></small>
              </div>
            </form> 
            </div>
            
        </div>
        
      </div>
    
    </div>
      </Container>
    </div>
  )
}

export default Login;
