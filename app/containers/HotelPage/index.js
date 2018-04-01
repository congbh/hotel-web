import { connect } from 'react-redux';
import { lifecycle, pure, compose as recompose, withState, withHandlers } from 'recompose';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { submit } from 'redux-form/immutable';

import { getHotelListRequest } from './actions';
import { makeSelectHotel } from './selectors';
import reducer from './reducer';
import saga from './saga';
import HotelListPage from './Layout';

export function mapDispatchToProps(dispatch) {
  return {
    onGetHotelList: (filter, limit, offset) => dispatch(getHotelListRequest(filter, limit, offset)),
    onSubmitForm: () => dispatch(submit('createHotelForm')),
  };
}

// const mapStateToProps = {};
const mapStateToProps = createStructuredSelector({
  hotels: makeSelectHotel(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'hotel', reducer });
const withSaga = injectSaga({ key: 'hotel', saga });

export default recompose(
    withReducer,
    withSaga,
    withConnect,
    withState('open', 'onSetOpen', false),
    withHandlers({
      onOpenModal: ({ onSetOpen }) => () => {
        onSetOpen(true);
      },
      onCloseModal: ({ onSetOpen }) => () => {
        onSetOpen(false);
      },
      onTriggerSubmit: ({ onSubmitForm }) => () => {
        onSubmitForm();
      },
    }),
    lifecycle({
      componentWillMount() {
        const { filter, limit, offset, onGetHotelList } = this.props;
        onGetHotelList(filter, limit, offset);
      },
    }),
    pure,
  )(HotelListPage);

