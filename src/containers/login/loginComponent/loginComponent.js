import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Typography } from '@material-ui/core';

import './loginComponent.scss';

export const LoginComponent = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    formClear();
    alert(`Email:${data.Email}, Password: ${data.Password}`);
  };

  console.log(errors);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function formClear() {
    setEmail('');
    setPassword('');
  }

  return (
    <div className="login">
      <Typography variant="h6">Login</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          name="Email"
          ref={register({ required: true, minLength: 1, pattern: /^\S+@\S+$/i })}
        />

        <input
          type="text"
          placeholder="Password"
          name="Password"
          ref={register({
            required: true,
            minLength: 1,
            maxLength: 30,
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i,
          })}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
