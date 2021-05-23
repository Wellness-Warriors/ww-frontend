import React from 'react';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';

// no attribution on this code?
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return(
    <Button
      variant="dark"
      onClick={() => loginWithRedirect()}
    >Log In
    </Button>
  );
};

export default LoginButton;
