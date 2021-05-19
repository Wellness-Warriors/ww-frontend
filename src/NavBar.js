import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';


import LogOutButton from './LogOutButton';

class NavBar extends React.Component{
  render(){
    return(

      <Navbar id="NavBar" bg="dark" variant="dark">
        <Navbar.Brand href="#wellness-warrior">Wellness Warrior</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/fitness-food">Fitness & Food</Nav.Link>
          <Nav.Link href="/my-profile">Profile</Nav.Link>
          <Nav.Link href="/about-us">About Us</Nav.Link>
        </Nav>
        <LogOutButton />
      </Navbar>

    );
  }
}

export default NavBar;
