import { connect } from 'react-redux';
import { lifecycle, pure, compose as recompose, withHandlers } from 'recompose';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';


import { loginRequest } from './actions';
import { makeSelectIsLogin } from './selectors';
import reducer from './reducer';
import saga from './saga';
import LoginForm from './Layout';

export function mapDispatchToProps(dispatch) {
  return {
    onLoginRequest: (email, password) => dispatch(loginRequest(email, password)),
  };
}

const mapStateToProps = createStructuredSelector({
  isLogedIn: makeSelectIsLogin(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default recompose(
  withReducer,
  withSaga,
  withConnect,
  withHandlers({
    onSubmit: ({ onLoginRequest }) => (values) => {
      const email = values.get('email');
      const password = values.get('password');
      onLoginRequest(email, password);
    },
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (nextProps.isLogedIn) {
        this.props.history.push('/dashboard');
      }
    },
  }),
  pure,
)(LoginForm);
