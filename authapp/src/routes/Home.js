import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='App'>
      <h1>Home Page</h1>
      <Link className='' to="/register"><button>Register</button></Link> &nbsp; &nbsp;
      <Link to="/login"><button>Login</button></Link>
    </div>
  )
}

export default Home;
