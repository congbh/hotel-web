import React from 'react';
import { Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const HotelModal = ({
    body,
    dimmer,
    footer,
    open,
    size,
    title,
    onClose,
 }) => (
   <Modal dimmer={dimmer} open={open} size={size} onClose={onClose}>
     <Modal.Header>{title}</Modal.Header>
     <Modal.Content>
       {body}
     </Modal.Content>
     <Modal.Actions>
       {footer}
       {/* <Button icon="cancel" labelPosition="right" color="yellow" content="Cancel" onClick={onClose} />
       <Button positive icon="save" labelPosition="right" content="Save" onClick={onSubmit} /> */}
     </Modal.Actions>
   </Modal>
 );

HotelModal.propTypes = {
  body: PropTypes.node,
  dimmer: PropTypes.string,
  footer: PropTypes.node,
  open: PropTypes.bool,
  size: PropTypes.string,
  title: PropTypes.string,
  onClose: PropTypes.func,
};

export default HotelModal;
