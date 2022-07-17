import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './routes/Home';
import Register from './routes/Register';
import Logout from './routes/Logout';
import DashBoard from './routes/DashBoard';
import Login from './routes/Login';

const App = () => {
  
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

export default App;
