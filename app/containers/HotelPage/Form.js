import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Container } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form/immutable';
import { Modal, FormInlineInput } from 'components';
import submit from './submit';

const validate = (values) => {
  // IMPORTANT: values is an Immutable.Map here!
  const errors = {};
  if (!values.get('name')) {
    errors.name = 'Required';
  }

  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

let CreateHotelForm = ({ handleSubmit }) => (
  <form size="tiny" onSubmit={handleSubmit} className="ui form">
    <Container>
      <Field fluid name="name" lable="Tên khách sạn" placeholder="Tên khách sạn" labelPosition="left" component={FormInlineInput} type="text" />
      <Form.Group widths="equal">
        <Field fluid={false} name="floor" lable="Số tầng" labelPosition="left" component={FormInlineInput} type="text" />
        <Field fluid={false} name="room" lable="Số phòng" labelPosition="left" component={FormInlineInput} type="text" />
      </Form.Group>
      <Field name="address" lable="Địa chỉ" labelPosition="left" component={FormInlineInput} type="text" />
      <Field name="province" lable="Thành phố" labelPosition="left" component={FormInlineInput} type="text" />
      <Form.Group widths="equal">
        <Field fluid={false} name="phone" lable="Điện thoại" labelPosition="left" component={FormInlineInput} type="text" />
        <Field fluid={false} name="email" lable="Email" labelPosition="left" component={FormInlineInput} type="text" />
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
  validate,
})(CreateHotelForm);

const FooterModal = ({ onClose, onSubmit }) => (
  <div>
    <Button icon="save" labelPosition="right" color="teal" content="Save" onClick={onSubmit} />
    <Button icon="cancel" labelPosition="right" color="red" content="Cancel" onClick={onClose} />
  </div>
);

FooterModal.propTypes = {
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

const HotelForm = ({
  isCreate,
  initialValues,
  open,
  onClose,
  onSubmit,
 }) => (
   <Modal
     body={<CreateHotelForm isCreate={isCreate} initialValues={initialValues} />}
     dimmer="blurring"
     footer={<FooterModal onClose={onClose} onSubmit={onSubmit} />}
     open={open}
     size="small"
     title="Thêm mới khách sạn"
     onClose={onClose}
   />
 );

HotelForm.propTypes = {
  initialValues: PropTypes.oneOfType([() => null, PropTypes.object]),
  isCreate: PropTypes.bool,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default HotelForm;
