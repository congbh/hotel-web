import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Container } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Modal, FormInlineInput } from 'components';
import submit from './submit';

let CreateHotelForm = ({ handleSubmit }) => (
  <form size="tiny" onSubmit={handleSubmit} className="ui form">
    <Container>
      <Field fluid name="name" lable="Tên khách sạn" placeholder="Tên khách sạn" labelPosition="left" component={FormInlineInput} type="text" />
      <Form.Group inline>
        <Field inline={false} fluid={false} name="floor" lable="Số tầng" labelPosition="left" component={FormInlineInput} type="text" />
        <Field inline={false} fluid={false} name="room" lable="Số phòng" labelPosition="left" component={FormInlineInput} type="text" />
      </Form.Group>
      <Field name="address" lable="Địa chỉ" labelPosition="left" component={FormInlineInput} type="text" />
      <Field name="province" lable="Thành phố" labelPosition="left" component={FormInlineInput} type="text" />
      <Form.Group inline>
        <Field inline={false} fluid={false} name="phone" lable="Điện thoại" labelPosition="left" component={FormInlineInput} type="text" />
        <Field inline={false} fluid={false} name="email" lable="Email" labelPosition="left" component={FormInlineInput} type="text" />
      </Form.Group>
      <Field name="website" lable="Website" labelPosition="left" component={FormInlineInput} type="text" />
      <Field name="note" lable="Ghi chú" labelPosition="left" component={FormInlineInput} type="text" />
    </Container>
  </form>
  );

CreateHotelForm.propTypes = {
  handleSubmit: PropTypes.func,
};

CreateHotelForm = reduxForm({
  form: 'createHotelForm',
  onSubmit: submit,
})(CreateHotelForm);

const FooterModal = ({ onClose, onSubmit }) => (
  <div>
    <Button icon="cancel" labelPosition="right" color="yellow" content="Cancel" onClick={onClose} />
    <Button positive icon="save" labelPosition="right" content="Save" onClick={onSubmit} />
  </div>
);

FooterModal.propTypes = {
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

const HotelForm = ({
    open,
    onClose,
    onSubmit,
 }) => (
   <Modal
     body={<CreateHotelForm />}
     dimmer="blurring"
     footer={<FooterModal onClose={onClose} onSubmit={onSubmit} />}
     open={open}
     size="small"
     title="Thêm mới khách sạn"
     onClose={onClose}
   />
 );

HotelForm.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default HotelForm;
