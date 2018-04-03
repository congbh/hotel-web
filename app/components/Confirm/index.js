import React from 'react';
import { Confirm } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ConfirmComponent = ({
    content,
    openConfirm,
    cancelBtnText,
    confirmBtnText,
    size,
    onCancel,
    onConfirm,
}) => (
  <Confirm
    content={content}
    open={openConfirm}
    cancelButton={cancelBtnText}
    confirmButton={confirmBtnText}
    size={size}
    onCancel={onCancel}
    onConfirm={onConfirm}
  />
);

ConfirmComponent.propTypes = {
  content: PropTypes.string,
  openConfirm: PropTypes.bool,
  cancelBtnText: PropTypes.string,
  confirmBtnText: PropTypes.string,
  size: PropTypes.string,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
};

export default ConfirmComponent;
