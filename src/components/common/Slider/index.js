import React from 'react';
import styled from 'styled-components';

const StyledVolumeSlider = styled.input`
  margin: 0;
  padding: 0;
  -webkit-appearance: none;
  border-radius: 5px;
  width: 100%;
  height: 3px;
  background: #444;
  outline: none;
  cursor: pointer;
  -webkit-transition: .2s;
  transition: opacity .2s;
  
  &:hover {
    opacity: 0.7;
  }
 
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ff5151;
    cursor: pointer;
    margin-top: 2px;
  }
`;
const StyledBarSlider = styled.input`
  vertical-align: top;   
  margin: 0;
  padding: 0;
  outline:none;
  -webkit-appearance: none;
  overflow: hidden;
  width: 100%;
  height: 5px;
  background: #444;
  cursor: pointer;
  
  &:hover {
    opacity: 0.7;
  }
 
  &::-webkit-slider-thumb {
    box-shadow: -1920px 0 0 1920px #ff5151;
    overflow: hidden;
    border-radius: 50%;
    -webkit-appearance: none;
    appearance: none;
    width: 1px;
    height: 5px;
    background: #ff5151;
    cursor: pointer;
  }
`;

const Slider = props => {
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

export default Slider;
