import React, { memo } from 'react';
import * as PropTypes from 'prop-types';

const styles = {
  color: '#fff',
  background: '#333',
  marginTop: '40px',
  border: '1px solid #fff',
  borderRadius: '10px',
  height: '30px',
  width: '300px',
  textAlign: 'center'
};

const TextInput = props => {
  const {
    name,
    value = '',
    type = 'text',
    placeholder = '',

    onChange,
    optional
  } = props;

  return (
    <input
      style={styles}
      id={name}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      {...optional}
    />
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,

  onChange: PropTypes.func,
  optional: PropTypes.object
};

export default memo(TextInput);
