import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Register from './routes/Register';
import Login from './routes/Login';
import Home from './routes/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
