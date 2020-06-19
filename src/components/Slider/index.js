import React from 'react';
import { StyledBarSlider, StyledVolumeSlider } from './styles';

export const Slider = props => {
  const {
    type = 'volume',
    name,
    value,
    min = 0,
    max,
    step = 1,
    onChange
  } = props;

  const onChangeInput = e => onChange(e.target.value);

  switch (type) {
    case 'volume':
      return (
        <StyledVolumeSlider
          name={name}
          type='range'
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={onChangeInput}
        />
      );
    case 'bar':
      return (
        <StyledBarSlider
          name={name}
          type='range'
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={onChangeInput}
        />
      );
    default:
      return (
        <input
          name={name}
          type='range'
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={onChangeInput}
        />
      );
  }
};
