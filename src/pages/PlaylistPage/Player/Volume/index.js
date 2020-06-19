import React, { memo, useState } from 'react';
import { Slider } from '../../../../components/Slider';
import VolumeIcon from '../../../../components/Icons/VolumeIcon';
import VolumeMidIcon from '../../../../components/Icons/VolumeMidIcon';
import VolumeOffIcon from '../../../../components/Icons/VolumeOffIcon';
import { StyledChild, StyledVolume } from './styles';

export const Volume = memo(({volume, onChangeVolume}) => {
  const [lastVolume, setLastVolume] = useState(0);

  const onToggleVolume = () => {
    if (volume > 0) {
      setLastVolume(volume);
      onChangeVolume(0);
    } else {
      onChangeVolume(lastVolume);
    }
  };

  const getIcon = () => {
    const parsedValue = parseFloat(volume);

    switch (true) {
      case parsedValue >= 0.8:
        return <VolumeIcon/>;
      case parsedValue > 0:
        return <VolumeMidIcon/>;
      case parsedValue === 0:
      default:
        return <VolumeOffIcon/>;
    }
  };

  return (
    <StyledVolume>
      <StyledChild onClick={onToggleVolume}>
        {getIcon()}
      </StyledChild>
      <StyledChild>
        <Slider
          type='volume'
          min={0}
          max={1}
          step={0.01}
          value={volume}
          name='volume'
          onChange={onChangeVolume}
        />
      </StyledChild>
    </StyledVolume>
  );
}, (p,n) => p.volume === n.volume);
