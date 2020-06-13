import React, { memo } from 'react';
import * as PropTypes from 'prop-types';

const styles = {
  width: '300px',
  marginTop: '40px',
  height: '50px',
  background: '#fff',
  borderRadius: '15px',
  border: '1px solid #333',
  color: '#333',
  fontWeight: 'bold'
};

const Button = ({text, onClick, optional}) => (
  <button style={styles} onClick={onClick} {...optional}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  optional: PropTypes.object,
};

export default memo(Button);
