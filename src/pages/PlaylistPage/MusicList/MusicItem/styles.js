import styled from 'styled-components';

export const StyledMusicItem = styled.li`
  list-style: none;
  border: 1px solid #444;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  
  &:hover {
    background: #333;
  }
`;
export const StyledSongInfo = styled.div`
  padding-left: 20px;
`;
export const StyledDuration = styled.div`
  position: absolute;
  right: 0;
  line-height: 50px;
  color: #fff;
  text-align: right;
  font-weight: bold;
  margin-left: 20px;
  margin-right: 40px;
`;
