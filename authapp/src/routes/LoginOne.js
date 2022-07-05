import Header from './Header';
import React, {useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginOne = () => {

  const [userdata,setUserData] = useState({
    userid : 0,
    name:"",
    email:"",
    username:"",
    password:"",
    mobileNumber:""
  });

  const [isSubmit,setIsSubmit] = useState(false);
  const [credentials, setCredentials] = useState('');

  const [errors,setErrors] = useState({});
  const [resData,setResData] = useState({});
  const [response,setResponse] = useState({});

  const changeHandler = (event) =>{
    setUserData({
      ...userdata,
      [event.target.name]: event.target.value
    })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(validate());
    setIsSubmit(true);

    // axios.post('http://localhost:8082/user/login',userdata)
    //   .then((response)=>{
    //       console.log(response.data);
    //       sessionStorage.setItem('isUserLoggedIn',true);
    //       alert('Successful');
    //     //   setIsSubmit(true);
    //     //   setErrors({});
    //       // window.location.assign("/dashboard");
    //   }).catch((error)=>{
    //     setResData(error.response);
    //     sessionStorage.setItem('isUserLoggedIn',false);
    //     sessionStorage.clear(0);
    //     console.log(error.response);
    //     setCredentials("Enter proper credentials.");
    //   });
  }

  useEffect(()=>{
    console.log(errors);
    if(Object.keys(errors).length === 0 & isSubmit){
        axios.post('http://localhost:8082/user/login',userdata)
        .then(
            (response)=>{
            console.log(response.data);
            setResponse(response.data);
            sessionStorage.setItem('isUserLoggedIn',true);
            setResData({});
            setTimeout(function(){
                alert('Login Successful');
                reset();
                window.location.assign("/dashboard");
            },2000);
      }).catch((error)=>{
        console.log(error.response);
        setResData(error.response);
        sessionStorage.setItem('isUserLoggedIn',false);
        sessionStorage.clear(0);

        setResponse({});
        setIsSubmit(false);
        setCredentials("Enter proper credentials.");
      });
    }
 // eslint-disable-next-line
  },[errors]);

  const reset = () =>{
    setUserData({
        username :"",
        password :""
    })
  }

  const validate = () =>{
    let fields = userdata;
    let errors = {};

    if(!fields["username"]){
        errors.username = "* Enter valid Username"
    }

    if(!(fields["password"])){
        errors.password = "* Enter correct password"
    }

    return errors;
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
            <h1 className='text-center font-weight-bold text-primary' id="headstyle">Login</h1>
            { (Object.keys(response).length !== 0) ? 
                   <div id="suces" className="card bg-light col-6 col-sm-6 col-lg-6 mb-3 offset-3 text-center"> 
                      <b>Login successful</b>
                    </div>
                   : null
              }
        
            {(resData.status === 404 || resData.status  === 401) ?
                <div id="failed" className="card bg-light col-6 col-sm-6 col-lg-6 mb-3 offset-3 text-center"> 
                <b>Invalid credentials</b>
                </div> 
                : null
            }    
            
            
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

             <div className="col-10  offset-1 pb-3">
                <label htmlFor="username" className=" form-label h6">Username:</label>
                <input type="text" 
                    className=" form-control" 
                    id="username" 
                    // required= {true}
                    name="username"
                    value={userdata.username}
                    autoComplete="off"
                    onChange={changeHandler}/>
                  
                  <div>
                   { !errors.username ?
                        <div>
                          {Object.keys(response).length === 0 ?
                            <div>
                            {(resData.status === 404) ?
                                <div>
                                    <small className="text-danger ">** {resData.data}</small>
                                </div> : null
                            } 
                            </div> 
                            : null
                          } 
                        </div>
                        : <small className="text-danger">{errors.username}</small>
                      }
                  </div>
             </div>

             <div className="col-10  offset-1 pb-3  ">
                <label htmlFor="password" className=" form-label h6">Password:</label>
                <input type="password" 
                    className=" form-control" 
                    id="password" 
                    // required= {true}
                    name="password"
                    value={userdata.password}
                    autoComplete="off"
                    onChange={changeHandler}/>
                    
                    <div>
                    { !errors.password ?
                        <div>
                          {Object.keys(response).length === 0 ?
                            <div>
                            {(resData.status === 401) ?
                                <div>
                                    <small className="text-danger ">** {resData.data}</small>
                                </div> : null
                            } 
                            </div> 
                            : null
                          } 
                        </div>
                        : <small className="text-danger">{errors.password}</small>
                      }
                    </div>
             </div>

              <div className='row offset-1'>
                 <input className='btn btn-primary mt-2 mb-2 p-2 col-10 font-weight-bold' type="submit" value="Login"/>
                 <small className='text-center col-10 p-1 mt-1 font-weight-bold'>Dont't have an account ? <Link to="/registerone" id="textdecor">Sign Up</Link></small> 
                 <small className='text-center col-10 pb-2 font-weight-bold' > <Link to="/registerone" id="textdecor">Forgot Password ?</Link></small>
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

export default LoginOne;
