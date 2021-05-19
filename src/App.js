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
            {!isAuthenticated? <LogIn/> : <Home />}
          </Route>

          <Route path="/fitness-food">
            <NavBar />
            <Fitness />
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
