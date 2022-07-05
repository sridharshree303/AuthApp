import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './routes/Login';
import Home from './routes/Home';
import Registerone from './routes/Registerone';
import Logout from './routes/Logout';
import DashBoard from './routes/DashBoard';
import LoginOne from './routes/LoginOne';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registerone' element={<Registerone/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/dashboard' element={<DashBoard/>}/>
          <Route path='/loginone' element = {<LoginOne/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
