import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <h1>Login</h1>
      <Form>
        <FormGroup>
          <Label htmlfor="username">Username</Label>
          <Input name="username" value={username} />
        </FormGroup>
        <FormGroup>
          <Label htmlfor="password">Password</Label>
          <Input name="password" value={password} />
        </FormGroup>
        <Button type="submit">Signup</Button>
      </Form>
    </div>
  );
};
export default Login;
