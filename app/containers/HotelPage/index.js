import { connect } from 'react-redux';
import { lifecycle, pure, compose as recompose, withState, withHandlers, withPropsOnChange } from 'recompose';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { submit } from 'redux-form/immutable';

import {
  deleteHotelRequest,
  getHotelListRequest,
} from './actions';
import { makeSelectHotel } from './selectors';
import reducer from './reducer';
import saga from './saga';
import HotelListPage from './Layout';

export function mapDispatchToProps(dispatch) {
  return {
    onDeleteHotel: (id) => dispatch(deleteHotelRequest(id)),
    onGetHotelList: (filter, limit, offset) => dispatch(getHotelListRequest(filter, limit, offset)),
    onSubmitForm: () => dispatch(submit('createHotelForm')),
  };
}

const mapStateToProps = createStructuredSelector({
  currState: makeSelectHotel(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'hotel', reducer });
const withSaga = injectSaga({ key: 'hotel', saga });

export default recompose(
    withReducer,
    withSaga,
    withConnect,
    withState('open', 'onSetOpen', false),
    withState('initialValues', 'onSetInitialValues', null),
    withState('isCreate', 'onCreateOrUpdate', true),
    withHandlers({
      onOpenModal: ({ onSetOpen, onSetInitialValues, onCreateOrUpdate }) => () => {
        onSetInitialValues(null);
        onCreateOrUpdate(true);
        onSetOpen(true);
      },
      onCloseModal: ({ onSetOpen, onCreateOrUpdate }) => () => {
        onCreateOrUpdate(true);
        onSetOpen(false);
      },
      onTriggerSubmit: ({ onSubmitForm }) => () => {
        onSubmitForm();
      },
      onEditItem: ({ onSetInitialValues, onSetOpen, onCreateOrUpdate }) => (item) => {
        onSetInitialValues(item);
        onCreateOrUpdate(false);
        onSetOpen(true);
      },
    }),
    withState('openConfirm', 'onSetConfirm', false),
    withState('id', 'onSetId', null),
    withHandlers({
      onCancelConfirm: ({ onSetConfirm, onSetId }) => () => {
        onSetId(null);
        onSetConfirm(false);
      },
      onConfirm: ({ id, onSetConfirm, onDeleteHotel }) => () => {
        onDeleteHotel(id);
        onSetConfirm(false);
      },
      onDeleteItem: ({ onSetConfirm, onSetId }) => ({ id }) => {
        onSetId(id);
        onSetConfirm(true);
      },
    }),
    lifecycle({
      componentWillMount() {
        const { filter, limit, offset, onGetHotelList } = this.props;
        onGetHotelList(filter, limit, offset);
      },
    }),
    withPropsOnChange(['currState'], ({ currState: { loading, completed }, onSetOpen }) => {
      if (!loading && completed) {
        onSetOpen(false);
      }
    }),
    pure,
  )(HotelListPage);

