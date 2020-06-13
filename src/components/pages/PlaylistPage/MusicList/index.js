import React from 'react';
import { connect } from 'react-redux';
import MusicItem from './MusicItem';
import styled from 'styled-components';
import { setItemToPlay } from '../../../../store/player/actions';

const StyledMusicList = styled.ul`
  margin: 0;
  padding: 0;
  overflow-y: auto;
  height: 80vh;
  position: relative;
`;

const MusicList = ({items, setItemToPlay}) => {
  const onSelect = id => setItemToPlay(id);

  return (
    <StyledMusicList>
      {items.map(item =>
        <MusicItem
          key={item.id}
          onSelect={onSelect}
          {...item}
        />
      )}
    </StyledMusicList>
  );
};

const mapStateToProps = state => ({
  items: state.player.items,
});

const mapDispatchToProps = {
  setItemToPlay
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicList);
