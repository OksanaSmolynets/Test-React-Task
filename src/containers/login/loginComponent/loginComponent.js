import React from 'react';
import { TextField, Typography, Button } from '@material-ui/core';

import './loginComponent.scss';

export const LoginComponent = () => {
  return (
    <div className="login">
      <form noValidate autoComplete="off">
        <Typography variant="h6">LOGIN</Typography>
        <TextField id="email" label="Email adress" variant="outlined" />
        <TextField id="password" label="Password" variant="outlined" />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            alert('clicked');
          }}>
          LOG IN
        </Button>
        <p>Forgot your password?</p>
        <p>Don’t have an account yet? </p>
        <Button href="#text-buttons" color="primary">
          Register
        </Button>
      </form>{' '}
    </div>
  );
};
