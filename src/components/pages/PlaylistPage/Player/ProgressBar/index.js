import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const a = `
.bar {
    user-select: none;
    width: 100%;
    display: flex;
    align-items: center;

    .bar__time {
      color: white;
      font-size: 16px;
    }

    .bar__progress {
      flex: 1;
      border-radius: 5px;
      margin: 0 20px;
      height: 10px;
      display: flex;
      align-items: center;
      cursor: pointer;

      .bar__progress__knob {
        position: relative;
        height: 16px;
        width: 16px;
        border: 1.5px solid white;
        border-radius: 50%;
        background-color: orange;
      }
    }
  }`;

const StyledProgressBar = styled.div`
user-select: none;
    width: 100%;
    display: flex;
    align-items: center;

`
const StyledProgress = styled.div`
flex: 1;
      border-radius: 5px;
      margin: 0 20px;
      height: 10px;
      display: flex;
      align-items: center;
      cursor: pointer;

`
const StyledProgressKnob = styled.span`
position: relative;
        height: 16px;
        width: 16px;
        border: 1.5px solid white;
        border-radius: 50%;
        background-color: orange;

`
const StyledProgressBarTime = styled.span`
color: white;
      font-size: 16px;

`

const ProgressBar = ({duration, time}) => {
  const curPercentage = (time / duration) * 100;

  function formatDuration(duration) {
    return moment
      .duration(duration, 'seconds')
      .format('mm:ss', {trim: false});
  }

  return (
    <StyledProgressBar>
      <StyledProgressBarTime>{formatDuration(time)}</StyledProgressBarTime>
      <StyledProgress
        style={{
          background: `linear-gradient(to right, orange ${curPercentage}%, white 0)`
        }}
      >
        <StyledProgressKnob
          style={{left: `${curPercentage - 2}%`}}
        />
      </StyledProgress>
      <StyledProgressBarTime>{formatDuration(duration)}</StyledProgressBarTime>
    </StyledProgressBar>
  );
};

export default ProgressBar;
