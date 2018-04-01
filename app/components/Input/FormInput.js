import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import React from 'react';

const FormInput = ({ fluid, icon, iconPosition, type, input, meta }) => (
  <div>
    <Form.Input
      fluid={fluid}
      icon={icon}
      iconPosition={iconPosition}
      type={type}
      error={!!meta.error}
      {...input}
    />
    { meta.touched && meta.error && <span>{meta.error}</span> }
  </div>
);

FormInput.propTypes = {
  fluid: PropTypes.bool,
  input: PropTypes.object,
  icon: PropTypes.string,
  iconPosition: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
};

export default FormInput;
