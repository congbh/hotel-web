import { Form, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import React from 'react';

const FormInlineInput = ({ inline = true, fluid = true, lable, labelPosition, placeholder, input, meta }) => (
  <Form.Field inline={inline}>
    <Input label={lable} labelPosition={labelPosition} placeholder={placeholder} fluid={fluid} {...input} {...meta} />
  </Form.Field>
  );

FormInlineInput.propTypes = {
  lable: PropTypes.string,
  placeholder: PropTypes.string,
  labelPosition: PropTypes.string,
  input: PropTypes.object,
  fluid: PropTypes.bool,
  inline: PropTypes.bool,
  meta: PropTypes.object,
};

export default FormInlineInput;

