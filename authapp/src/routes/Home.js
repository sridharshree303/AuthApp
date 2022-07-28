import React, { useEffect } from 'react';
import Header from '../models/Header';
import Container from 'react-bootstrap/esm/Container';

const Home = () => {
  return (
    <div className='App' >
      <Header/>
      <Container fluid  >
      <div id="homecard">
          <div className="card col-10 offset-1">
              <div className="card-header bg-white">
                  <h1 className='display-5 p-2' id="headercard">Home Page</h1>
              </div>
              <div className="card-body pt-4 pb-4">
                 <h4 id="cardbodyh4">"Technology is best when it brings people together."</h4>
                 <p id="cardbodyp"> --  Matt Mullenweg, Social Media Entrepreneur</p>
                 <h4 id="cardbodyh4">"The Web as I envisaged it,we have not seen it yet.The future is still so _much bigger than the past."</h4>
                 <p id="cardbodyp"> -- Tim Berners-Lee, Inventor of the World Wide Web</p>
              </div>
          </div>
      </div>
      </Container>
    </div>
  )
}

export default Home;
