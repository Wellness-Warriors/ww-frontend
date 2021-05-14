import React from 'react';
import {Link} from 'react-router-dom';
import LogOutButton from './LogOutButton';

class NavBar extends React.Component{
  render(){
    return(
      <nav className="nav-bar">
        <h1>Wellness Warriors App</h1>
        <div className="links">
          <LogOutButton />
          <Link to="/">Home</Link>
          <Link to="/my-profile">MyProfile</Link>
          <Link to="/about-us">AboutUs</Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
