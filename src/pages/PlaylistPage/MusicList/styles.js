import styled from 'styled-components';

export const StyledMusicList = styled.ul`
  margin: 0;
  padding: 0;
  overflow-y: auto;
  height: ${({isPlaying}) => isPlaying
  ? 'calc(100vh - 108px)'
  : '100vh'};
  position: relative;
  
  &::-webkit-scrollbar {
    width: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #999;
    border-radius: 5px;
  }
`;
