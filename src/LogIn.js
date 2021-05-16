import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import LoginButton from './LogInButton';
import { withAuth0 } from '@auth0/auth0-react';

class LogIn extends React.Component{
  render(){
    const { isAuthenticated } = this.props.auth0;
    return(
      !isAuthenticated && (
        <Container class="d-flex justify-content-center">
          <h1>Welcome to Wellness Warriors!</h1>
          <Card style={{ width: '35rem' }} className="text-center" border="dark">
            <Card.Body>
              <Card.Title>Log In</Card.Title>
              <Card.Text>
                Click Below to Log In
              </Card.Text>
              <LoginButton />
            </Card.Body>
          </Card>
        </Container>
      )
    );
  }
}

export default withAuth0(LogIn);
