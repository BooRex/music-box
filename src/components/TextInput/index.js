import React, { memo } from 'react';
import { StyledTextInput } from './styles';

export const TextInput = memo(props => {
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
});
