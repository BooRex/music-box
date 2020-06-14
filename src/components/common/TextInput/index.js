import React from 'react';
import styled from 'styled-components';

const StyledTextInput = styled.input`
  color: #fff;
  background: #333;
  margin-top: 40px;
  border: 1px solid #fff;
  border-radius: 10px;
  height: 30px;
  width: 300px;
  text-align: center;
`

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
    <StyledTextInput
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

export default React.memo(TextInput);
