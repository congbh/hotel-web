import { connect } from 'react-redux';
import { compose as recompose, withState, withHandlers } from 'recompose';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { loginRequest } from './actions';
import { makeSelectUser } from './selectors';
import reducer from './reducer';
import saga from './saga';
import LoginForm from './Layout';

export function mapDispatchToProps(dispatch) {
  return {
    onLoginRequest: (email, password) => dispatch(loginRequest(email, password)),
  };
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });
const withEmail = withState('email', 'onSetEmail', '');
const withPassword = withState('password', 'onSetPassword', '');

export default recompose(
  withReducer,
  withSaga,
  withConnect,
  withEmail,
  withPassword,
  withHandlers({
    onLogin: ({ email, password, onLoginRequest }) => () => {
      onLoginRequest(email, password);
    },
    onChangeEmail: ({ onSetEmail }) => ({ target: { value } }) => {
      onSetEmail(value);
    },
    onChangePassword: ({ onSetPassword }) => ({ target: { value } }) => {
      onSetPassword(value);
    },
  }),
)(LoginForm);
