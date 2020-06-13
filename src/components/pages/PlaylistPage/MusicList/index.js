import React from 'react';
import MusicItem from './MusicItem';

const styles = {
  margin: 0,
  padding: 0
};

const MusicList = ({items}) => {
  const onSelect = track => {
    console.log('---', track);
  };

  return (
    <ul style={styles}>
      {items.map(item =>
        <MusicItem
          key={item.id}
          onSelect={onSelect}
          {...item}
        />
      )}
    </ul>
  );
};

MusicList.propTypes = {};

export default MusicList;
