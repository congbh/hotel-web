import { pure, compose as recompose, withState, withHandlers } from 'recompose';
// import { createStructuredSelector } from 'reselect';
// import injectReducer from 'utils/injectReducer';
// import injectSaga from 'utils/injectSaga';

// import { loginRequest } from './actions';
// import { makeSelectToken } from './selectors';
// import reducer from './reducer';
// import saga from './saga';
import DashboardPage from './Layout';

// export function mapDispatchToProps(dispatch) {
//   return {};
// }

// const mapStateToProps = {};

// const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({ key: 'login', reducer });
// const withSaga = injectSaga({ key: 'login', saga });

export default recompose(
//   withReducer,
//   withSaga,
  // withConnect,
  withState('visible', 'onSetVisible', false),
  withHandlers({
    onToggleVisibility: ({ visible, onSetVisible }) => () => {
      onSetVisible(!visible);
    },
    onNavHotelList: ({ history }) => () => {
      history.push('/hotel');
    },
  }),
  pure,
)(DashboardPage);
