import Header from '../models/Header';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = (props) => { 

    const navigate = useNavigate();

    //Create form initial state
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
    const [resData,setResData] = useState({}); 
    const [response,setResponse] = useState({});

    const [data,setData] = useState({
          errorStatus: false,
    });
  
    const onChangeHandler = (e) =>{
      // No need to return this function can be void
      setUserData({
        ...userdata,
        [e.target.name]:e.target.value
      })
    };
  
    const submitHandler = (e) =>{
      e.preventDefault();
      setErrors(validate());
      setIsSubmit(true);
    }

    useEffect(()=>{
      console.log(errors);
      if(Object.keys(errors).length === 0 && isSubmit){
        axios.post('http://localhost:8082/user/register',userdata)
        .then(
          (response)=>{ 
            // console.log(response.data);
            setResponse(response.data);
            setResData({});
            setTimeout(function(){
              // alert('You are registered suceesfully..');
              reset();
              // window.location.assign("/loginone");
              navigate('/login')
            }, 1500);
          }
          ).catch((error)=>{
            console.log(error.response);
            setResData(error.response);
            setResponse({});
            setIsSubmit(false);
          });
      }
    // eslint-disable-next-line 
    },[errors]);

    const reset = () =>{
      setUserData({
        name:"",
        email:"",
        username:"",
        password:"",
        mobileNumber:""
      })
    }

    const validate = () =>{
      let fields = userdata;
      let errors = {};
      let passwordRegex = "^(?=.*[0-9])"
                + "(?=.*[a-z])(?=.*[A-Z])"
                + "(?=.*[@!*#$%^&+=])"
                + "(?=\\S+$).{8,16}$";
      // ^ represents starting character of the string.
      // (?=.*[0-9]) represents a digit must occur at least once.
      // (?=.*[a-z]) represents a lower case alphabet must occur at least once.
      // (?=.*[A-Z]) represents an upper case alphabet that must occur at least once.
      // (?=.*[@#$%^&-+=()] represents a special character that must occur at least once.
      // (?=\\S+$) white spaces don’t allowed in the entire string.
      // .{8, 16} represents at least 8 characters and at most 16 characters.
      // $ represents the end of the string.
      // sample password :Asdf@123

      let emailregx = "^[A-Za-z0-9](?=\\S+$)(\\.?[a-zA-Z]){3,}@[ge](oogle)?mail\\.com$";

      //first name
      if(!fields["name"]){
        errors.name = "* Name is required"
      }else if(typeof fields["name"] !== "undefined"){
        if (!fields["name"].match("^[a-zA-Z][a-zA-Z\\s]+$")) {
          errors.name = "* Enter Only Alphabets";
        }
      }

      // //last name
      // if(!fields["lastname"]){
      //   errors.lastname = "* Last name is required"
      // }else if(typeof fields["lastname"] !== "undefined"){
      //   if (!fields["lastname"].match(/^[a-zA-Z]+$/)) {
      //     errors.lastname = "*Enter Only letters";
      //   }
      // }

      //email
      if (!fields["email"]) {
        errors.email = "* Enter a valid email";
      }else if(!fields["email"].match(emailregx)){
        errors.email = "* Format must be i.e example@gmail.com";
      }

      
      //user name
      if(!fields["username"]){
        errors.username = "* Username is mandatory"
      }else if((fields["username"].length >1) && (fields["username"].length < 6)){
        errors.username = "* Username must be minimum 6 to 14 characters"
      } else if(!(fields["username"].match("^[a-zA-Z0-9\\@]{6,20}$"))){
        errors.username = "* Enter a Valid Username"
      }

      //password
      // if(!fields["password"]){
      //   errors.password = "*Cannot be empty"
      // }
      if(!(fields["password"])){
        errors.password = "* Password is mandatory"
      }else if((fields["password"]).length >1 && (fields["password"]).length < 8){
        // setData({errorStatus:true});
        errors.password = "* Password length must be 8 to 15 characters"
      }
      else if(!(fields["password"].match(passwordRegex))){
        setData({errorStatus:true});
      } else {
        setData({errorStatus:false})
      }
      
      //mobile number
      if(!fields["mobileNumber"]){
        errors.mobileNumber = "* Enter Mobile Number"
      }
      else if(fields["mobileNumber"].match("^[0-5][0-9]{9}")){
        errors.mobileNumber = "** Enter a valid Mobile number";
      } 
        else if(!(fields["mobileNumber"]).match("^[6789][0-9]{9}")){
          errors.mobileNumber = "* Mobile Number must be 10 numbers"
          // errors.mobileNumber1 = "* Enter without country code i.e +91 ";
      } 
      

      // else if(fields["mobileNumber"].length !== 10){
      //   errors.mobileNumber = "* Mobile Number must be 10 numbers"
      // }
      return errors;
    }

  return (
    <div className='App'>
      <Header/>
      <Container fluid id="containerpad">
      {/* <p className='text-white'>{resData.status}</p> */}
      <div className='pt-5'>
      {/* <h1 className='display-4 p-4 text-center text-white'>Register</h1> */}
      
      <div className='row pb-5'>
        <div className='col-8 col-md-6 offset-md-3 offset-lg-4 col-lg-4 offset-2'>
        <div>
            <form onSubmit={submitHandler} className="row card pt-2 pb-3 " >
            <div>
            <h1 className='text-center font-weight-bold text-primary' id="headstyle">Register</h1>
              { (response.status === 201) ? 
                   <div id="suces" className="card bg-light col-6 col-sm-6 col-lg-6 mt-1 mb-2 offset-3 text-center"> 
                      <b>Register successful</b>
                    </div>
                   : null
              }
            </div>
            <div>
                {(resData.status === 422 || resData.status  === 400 || resData.status  === 409 || resData.status === 302) ?
                  <div id="failed" className="card bg-light col-6 col-sm-6 col-lg-6 mt-1 mb-2 offset-3 text-center"> 
                    <b>Incorrect details</b>
                  </div> 
                  : null
                }    
            </div>
            <div className="col-10 offset-1 pb-1">
                <label htmlFor="name" className=" form-label h6">Enter Full Name:</label>
                <input type="text" 
                    className=" form-control" 
                    id="name" 
                    name="name"
                    value={userdata.name}
                    autoComplete="off"
                    // required= {true}
                    onChange={onChangeHandler}/>
                  <small className="text-danger ">{errors.name}</small>
             </div>
            
             {/* <div className="col-10  offset-1 pb-1">
                <label htmlFor="lastname" className=" form-label h6">Last Name:</label>
                <input type="text" 
                    className=" form-control" 
                    id="lastname"   
                    name="lastname"
                    value={userdata.lastname}
                    autoComplete="off"
                    // required= {true}
                    onChange={onChangeHandler}/>
                  <small className="text-danger">{errors.lastname}</small>
             </div> */}
             
            <div className="col-10  offset-1 pb-1">
                <label htmlFor="email" className=" form-label h6">Email:</label>
                <input type="email" 
                    className=" form-control" 
                    id="email" 
                    // required= {true}
                    name="email"
                    value={userdata.email}
                    autoComplete="off"
                    onChange={onChangeHandler}/>
                    <div>
                      {response.status !== 201 ?
                        <div>
                          {(resData.status === 409) ?
                          <div>
                              <small className="text-danger ">** {resData.data}</small>
                          </div> : null
                          }   
                        </div>
                        : null
                      }
                    </div>
                    
                  <small className="text-danger">{errors.email}</small>
             </div>

             <div className="col-10  offset-1 pb-1">
                <label htmlFor="username" className=" form-label h6">Username:</label>
                <input type="text" 
                    className=" form-control" 
                    id="username" 
                    // required= {true}
                    name="username"
                    value={userdata.username}
                    autoComplete="off"
                    onChange={onChangeHandler}/>
                    {response.status !== 201 ?
                        <div>
                          {(resData.status === 302) ?
                          <div>
                              <small className="text-danger ">** {resData.data}</small>
                          </div> : null
                          }   
                        </div>
                        : null
                      }
                  <small className="text-danger">{errors.username}</small>
             </div>

             <div className="col-10  offset-1 pb-1">
                <label htmlFor="password" className=" form-label h6">Password:</label>
                <input type="password" 
                    className=" form-control" 
                    id="password" 
                    // required= {true}
                    name="password"
                    value={userdata.password}
                    autoComplete="off"
                    onChange={onChangeHandler}/>
                    <div>
                      {data.errorStatus ?
                        <div> 
                          <small className="text-danger">* Password must be 8-16 characters</small><br/>
                          <small className="text-danger">* Include atleast one lowercase and uppercase letter</small><br/>
                          <small className="text-danger">* Include atleast one symbol i.e.@,#,$,%,^, & ,-,+,= </small><br/>
                          <small className="text-danger">* Include atleast one number</small>
                        </div> 
                        : <small className="text-danger">{errors.password}</small>
                      }
                    </div>
                    
             </div>

             <div className="col-10  offset-1 pb-3">
                <label htmlFor="mobileNumber" className=" form-label h6">Contact Number:</label>
                <input type="text" 
                    className=" form-control" 
                    id="mobileNumber" 
                    name="mobileNumber"
                    placeholder=' '
                    value={ userdata.mobileNumber}
                    autoComplete="off"
                    // required= {true}
                    onChange={onChangeHandler}/>
                    <div>
                    {response.status !== 201 ?
                        <div>
                          {(resData.status === 400) ?
                          <div>
                              <small className="text-danger ">** {resData.data}</small>
                          </div> : null
                          }   
                        </div>
                        : null
                      }
                    </div>
                    {
                      Object.keys(errors).length !== 0 ?
                      <div>
                        <small className="text-danger ">{errors.mobileNumber}</small><br/>
                        <small className="text-danger ">{errors.mobileNumber1}</small>
                      </div>
                      : null
                    }
                  
             </div>

              <div className='row offset-1 mb-2'>
                  <input className='btn btn-primary mt-1 p-2 col-10 font-weight-bold' type="submit" value="Sign Up"/>
                 <small className='text-center col-10 p-1 font-weight-bold'>Already have an account ? <Link to="/login">Log In</Link></small> 
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

export default Register;
