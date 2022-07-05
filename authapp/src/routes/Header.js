import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import '../App.css';

const Header = () => {

  let [loginStatus,setLoginStatus] = useState(false);

  useEffect(() => { 
    setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
  },[])

  // headers separation 
  if(loginStatus){
    return (
      <div>
        <div>
          <Navbar collapseOnSelect expand="lg" id="Navbar" variant="dark">
            <Container fluid id="containerpad">
              <Navbar.Brand  href="/"><h1 className='display-6 font-weight-bold '>InExpo!!</h1></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              
              <Navbar.Collapse id="responsive-navbar-nav">
                <div className='p-2 mr-auto'>
                  <Form className='d-flex px-5'>
                      <Form.Control
                          type="search"
                          placeholder="Search"
                          className="me-3 rounded-pill "
                          id="searchbar"
                          aria-label="Search"
                      />
                      <Button id="searchicon" className='btn btn-info rounded-pill px-3 p-1' variant="outline-success">Search</Button>
                  </Form>
                </div>
                <Nav className=" " >
                    <Nav.Link  href="/logout"><Button className="btn btn-info text-white mx-1 p-2 px-3 rounded-pill font-weight-bold">Log Out</Button></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>  
          </Navbar>
        </div>  
      </div>
    )
  }
  else{
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" id="Navbar" variant="dark">
          <Container fluid id="containerpad">
            <Navbar.Brand  href="/"><h1 className='display-6 font-weight-bold '>InExpo!!</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto  " >
                <Nav.Link  href="/login"><Button className="btn btn-info text-white mx-1 p-2 px-3 rounded-pill font-weight-bold">Log In</Button></Nav.Link>
                <Nav.Link  href="/registerone"><Button className="btn btn-info text-white p-2 px-3 rounded-pill font-weight-bold">SignUp</Button></Nav.Link>
            </Nav>
            <div className='p-2'>
            <Form className='d-flex px-1'>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-3 rounded-pill "
                    id="searchbar"
                    aria-label="Search"
                />
                <Button id="searchicon" className='btn btn-info rounded-pill px-3 p-1' variant="outline-success">Search</Button>
            </Form>
            </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default Header;
