import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import '../App.css';
import { Link } from 'react-router-dom';

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
              <Navbar.Brand  href="/"><h1 className='display-6 font-weight-bold '>🅰🅲🅲🅴🆂🆂</h1></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              
              <Navbar.Collapse id="responsive-navbar-nav">
                {/* <div className='p-2 mr-auto'>
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
                </div> */}
                <Nav className="ml-auto " >
                    <Nav.Link  href="/logout"><Button className="btn btn-info mx-1 p-2 px-3 rounded-pill" id="searchicon">Log Out</Button></Nav.Link>
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
            <Navbar.Brand  href="/"><h1 className='display-6  '>🅰🅲🅲🅴🆂🆂</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto  " >
                <Link to="/login"><Button className="btn btn-info m-2 p-2 px-3 rounded-pill  " id="searchicon">Log In</Button></Link>
                <Link to="/register"><Button className="btn btn-info m-2 p-2 px-3 rounded-pill "  id="searchicon">SignUp</Button></Link>
            </Nav>
            <div className='p-2'>
            <Form className='d-flex'>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-3 rounded-pill "
                    id="searchbar"
                    aria-label="Search"
                />
                <Button id="searchicon" className='btn btn-info rounded-pill px-3' variant="outline-success">Search</Button>
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
