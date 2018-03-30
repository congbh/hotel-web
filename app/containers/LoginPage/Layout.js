import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

const LoginForm = ({
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onLogin,
}) => (
  <div className="login-form">
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign="center"
      style={{ height: '100%' }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={onLogin}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              value={email}
              onChange={onChangeEmail}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
              onChange={onChangePassword}
            />

            <Button type="submit" color="teal" fluid size="large">Login</Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
  );

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  onLogin: PropTypes.func,
};

export default LoginForm;
