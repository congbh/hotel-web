import { Segment } from 'semantic-ui-react';
import React from 'react';
import injectLayout from 'utils/injectLayout';
import { Confirm, HeaderBar } from 'components';
import PropTypes from 'prop-types';
import HotelForm from './Form';
import Table from './Table';

const withLayout = injectLayout({ active: 'hotel' });

const HotelListPage = ({
  currState: { hotels },
  isCreate,
  initialValues,
  open,
  openConfirm,
  onCancelConfirm,
  onConfirm,
  onCloseModal,
  onOpenModal,
  onTriggerSubmit,
  onEditItem,
  onDeleteItem,
}) => (
  <Segment basic>
    <HeaderBar
      title="Hotel management"
      onAddBtnClick={onOpenModal}
    />
    <HotelForm
      isCreate={isCreate}
      initialValues={initialValues}
      open={open}
      onSubmit={onTriggerSubmit}
      onClose={onCloseModal}
    />
    <Table
      data={hotels}
      onEditItem={onEditItem}
      onDeleteItem={onDeleteItem}
    />
    <Confirm
      content="Bạn có chắc chắn là muốn xoá không ?"
      openConfirm={openConfirm}
      cancelBtnText="Cancel"
      confirmBtnText="Ok"
      size="tiny"
      onCancel={onCancelConfirm}
      onConfirm={onConfirm}
    />
  </Segment>
);

HotelListPage.propTypes = {
  currState: PropTypes.object,
  open: PropTypes.bool,
  isCreate: PropTypes.bool,
  initialValues: PropTypes.oneOfType([() => null, PropTypes.object]),
  onCloseModal: PropTypes.func,
  onOpenModal: PropTypes.func,
  onTriggerSubmit: PropTypes.func,
  onEditItem: PropTypes.func,
  onDeleteItem: PropTypes.func,
  openConfirm: PropTypes.bool,
  onCancelConfirm: PropTypes.func,
  onConfirm: PropTypes.func,
};

export default withLayout(HotelListPage);
