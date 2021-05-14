import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { withAuth0} from '@auth0/auth0-react';
import AboutUs from './AboutUs';
import Home from './Home';
import NavBar from './NavBar';
import Footer from './Footer';
import LogIn from './LogIn';
import MyProfile from './MyProfile';


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
    console.log('app user:',user && user.name,user && user.email,user && user.picture);

    return(
      <Router>
        <Switch>

          <Route exact path="/">
            {!isAuthenticated? <LogIn/> : <Home />}
          </Route>

          <Route path="/my-profile">
            <NavBar />
            <MyProfile
              name={user && user.name}
              email={user && user.email}
              picture={user && user.picture}
            />
            <Footer />
          </Route>

          <Route path="/about-us">
            <NavBar />
            <AboutUs />
            <Footer />
          </Route>
        </Switch>

      </Router>
    );
  }
}

export default withAuth0(App);
