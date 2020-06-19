import styled from 'styled-components';

export const StyledVolumeSlider = styled.input`
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
export const StyledBarSlider = styled.input`
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
