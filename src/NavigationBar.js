import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import styled from 'styled-components';

const styles = styled.div`
.Navbar{
    background-color : #222;
}
.navbar-brand, .navbar-nav .nav-link{
    color: #bbb;
    &:hover
 {
     color: white;
 }
}

`;

export const NavigationBar = () => (
    <styles>
        <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand href="/"><img src="https://www.techlp.org/img/logo.png" alt="Logo"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
*/}
    </Nav>
    <Nav>
       <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
      <Nav.Link href="/about">About Us</Nav.Link>
      <Nav.Link href="/collegeTraining">College Training</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">Corporate Training</Nav.Link>

      <NavDropdown title="Courses" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Civil Engineering</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Mechanical Engineering</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#deets">Contact</Nav.Link>
      <Nav.Link href="#deets">Online Training</Nav.Link>
     </Nav>
    </Navbar.Collapse>
   </Navbar>
  </div>
    </styles>
)