import { Segment } from 'semantic-ui-react';
import React from 'react';
import injectLayout from 'utils/injectLayout';
import { HeaderBar } from 'components';
import PropTypes from 'prop-types';
import HotelForm from './Form';

const withLayout = injectLayout({ active: 'hotel' });

const HotelListPage = ({
  open,
  onCloseModal,
  onOpenModal,
  onTriggerSubmit,
}) => (
  <Segment basic>
    <HeaderBar
      title="Hotel management"
      onAddBtnClick={onOpenModal}
    />
    <HotelForm open={open} onSubmit={onTriggerSubmit} onClose={onCloseModal} />
  </Segment>
);

HotelListPage.propTypes = {
  open: PropTypes.bool,
  onCloseModal: PropTypes.func,
  onOpenModal: PropTypes.func,
  onTriggerSubmit: PropTypes.func,
};

export default withLayout(HotelListPage);
