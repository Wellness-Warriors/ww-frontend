import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { withAuth0} from '@auth0/auth0-react';
import AboutUs from './AboutUs';
import Home from './Home';
import NavBar from './NavBar';
import LogIn from './LogIn';
import MyProfile from './MyProfile';
import Fitness from './Fitness';
import Food from './Food';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      pic: '',
    };
  }

  render(){
    const { user, isAuthenticated } = this.props.auth0;

    return(
      <Router>
        <Switch>
          <Route exact path="/">
            {/* Weird to use the ! in this conditional; usually you want to just flip the order to make it more readable. */}
            {isAuthenticated? <Home /> : <LogIn />}
          </Route>

          <Route path="/fitness">
            {/* Weird that you wouldn't just include the nav bar outside of the Router, so it shows on every page. */}
            <NavBar />
            <Fitness />
          </Route>

          <Route path="/food">
            <NavBar />
            <Food />
          </Route>

          <Route path="/my-profile">
            <NavBar />
            {isAuthenticated &&
            <MyProfile
              name={user.name}
              email={user.email}
              picture={user.picture}
            />
            }
          </Route>

          <Route path="/about-us">
            <NavBar />
            <AboutUs />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default withAuth0(App);
