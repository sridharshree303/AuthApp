import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './routes/Home';
import Register from './routes/Register';
import Logout from './routes/Logout';
import DashBoard from './routes/DashBoard';
import Login from './routes/Login';
import { msalApp,LOGIN_SCOPES,acquireToken,fetchAPI} from './auth-utils';

class App extends Component {

  constructor(props){
    super(props);
    this.showMessage = this.showMessage.bind(this);
    this.state = {
      apiCalled : false,
      isLoggedIn : false
    }
  }

  showMessage(){
    console.log("Show message called!");

    msalApp.loginPopup(LOGIN_SCOPES).then((loginResponse)=>{
      console.log("Login Response = ",loginResponse);
    })
  }

  render(){
    return (
      <div>
        <Router>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/login' element = {<Login/>}/>
            <Route path='/dashboard' element={<DashBoard/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
