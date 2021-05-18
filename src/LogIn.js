import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import LoginButton from './LogInButton';
import { withAuth0 } from '@auth0/auth0-react';
import './Login.css';

class LogIn extends React.Component{
  render(){
    const { isAuthenticated } = this.props.auth0;
    return(
      !isAuthenticated && (
        <div>
          <Container className="text-center">
            <h1>Welcome to Wellness Warriors!</h1>
            <Card
              id="login-card"
              style={{ width: '35rem' }}
              className="text-center"
              border="dark"
            >
              <Card.Body>
                <Card.Title>Log In</Card.Title>
                <Card.Text>
                  Click Below to Log In
                </Card.Text>
                <LoginButton />
              </Card.Body>
            </Card>
          </Container>
        </div>
      )
    );
  }
}

export default withAuth0(LogIn);
