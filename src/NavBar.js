import React from 'react';
// import { Link } from 'react-router-dom';
import LogOutButton from './LogOutButton';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavBar extends React.Component {
  render() {
    return (
      // <nav className="nav-bar">
      //   <h1>Wellness Warriors App</h1>
      //   <div className="links">
      //     <Link to="/">Home</Link>
      //     <Link to="/my-profile">MyProfile</Link>
      //     <Link to="/about-us">AboutUs</Link>
      //   </div>
      // </nav>
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#wellness-warrior">Wellness Warrior</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/my-profile">Profile</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
          </Nav>
          <LogOutButton />
        </Navbar>
      </>
    );
  }
}

export default NavBar;
