import React from 'react';
import MusicList from './MusicList';

const items = [
  {
    id: 1,
    name: 'Spirit',
    author: 'Keiino',
    time: '3:06'
  },
  {
    id: 2,
    name: 'Spirit',
    author: 'Keiino',
    time: '3:06'
  },
  {
    id: 3,
    name: 'Spirit',
    author: 'Keiino',
    time: '3:06'
  }
];

const styles = {
  header: {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#fff',

  }
}

const PlaylistPage = () => {
  // const {} = props;

  return (
    <div>
      <div style={styles.header}>Playlist</div>
      <MusicList items={items}/>
    </div>
  );
};

PlaylistPage.propTypes = {};

export default PlaylistPage;
