import React from 'react';
import NavBar from './NavBar';
import Card from 'react-bootstrap/Card';

class Home extends React.Component{
  render(){
    console.log(this.props.auth0);
    return(
      <div>Home component
        <NavBar />
        <Card>quote</Card>
        <Card>form</Card>
      </div>
    );
  }
}

export default Home;
