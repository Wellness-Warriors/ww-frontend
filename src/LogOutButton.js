import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

// no attribution on this code?
const LogOutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (

    (isAuthenticated &&
      <Button
        variant="info"
        onClick={() => logout({ returnTo: window.location.origin })}
      >Log Out
      </Button>
    )

  );
};
export default LogOutButton;
