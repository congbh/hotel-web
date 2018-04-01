import { Button, Grid, Header, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form/immutable';
import { FormInput } from 'components';
import PropTypes from 'prop-types';
import React from 'react';

const validate = (values) => {
  // IMPORTANT: values is an Immutable.Map here!
  const errors = {};
  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
    errors.email = 'Invalid email address';
  }
  if (!values.get('password')) {
    errors.password = 'Required';
  }
  return errors;
};

/* eslint-disable import/no-mutable-exports */
let LoginForm = ({ handleSubmit }) => (
  <form size="large" onSubmit={handleSubmit}>
    <Segment stacked>
      <Field fluid name="email" icon="mail" iconPosition="left" placeholder="Email" component={FormInput} type="text" />
      <Field fluid name="password" icon="lock" iconPosition="left" placeholder="Password" component={FormInput} type="password" />
      <Button type="submit" color="teal" fluid size="large">Login</Button>
    </Segment>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
};

LoginForm = reduxForm({
  form: 'LoginForm',
  validate,
})(LoginForm);

const LoginPage = ({
  onSubmit,
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
        <LoginForm onSubmit={onSubmit} />
      </Grid.Column>
    </Grid>
  </div>
);


LoginPage.propTypes = {
  onSubmit: PropTypes.func,
};

export default LoginPage;
