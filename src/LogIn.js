import React from 'react';
import Card from 'react-bootstrap/Card';
import LoginButton from './LogInButton';
import { withAuth0} from '@auth0/auth0-react';

class LogIn extends React.Component{
  render(){
    const { isAuthenticated } = this.props.auth0;
    return(
      !isAuthenticated && (
        <>
          <h1>Hello from LogIn component</h1>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Log In</Card.Title>
              <Card.Text>
                Click Below to Log In
              </Card.Text>
              <LoginButton />
            </Card.Body>
          </Card>
        </>
      )
    );
  }
}

export default withAuth0(LogIn);
