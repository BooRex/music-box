import React from 'react';
import { Slider } from '../../../../components/Slider';

export const Bar = ({currentTime, duration, onChange}) => (
  <Slider
    type='bar'
    name='bar'
    min={0}
    value={currentTime}
    max={duration}
    step={0.01}
    onChange={onChange}
  />
);
