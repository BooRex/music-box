import React, { useState } from 'react';
import Slider from '../../../../common/Slider';
import VolumeIcon from '../../../../common/Icons/VolumeIcon';
import styled from 'styled-components';
import VolumeMidIcon from '../../../../common/Icons/VolumeMidIcon';
import VolumeOffIcon from '../../../../common/Icons/VolumeOffIcon';

const StyledVolume = styled.div`
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
`;
const StyledChild = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  line-height: 50px;
`;

const Volume = ({volume, onChangeVolume}) => {
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
};

export default React.memo(Volume, (p,n) => p.volume === n.volume);
