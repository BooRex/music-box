import React from 'react';
import * as PropTypes from 'prop-types';

const styles = {
  wrapper: {
    listStyle: 'none',
    padding: '10px',
    border: '1px solid #fff',
    borderRadius: '5px',
    display: 'flex',
    overflow: 'hidden',
    margin: '5px 20px 0 20px',
  },
  songInfo: {
    color: '#fff',
    marginLeft: '10px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignSelf: 'center',
    minWidth: '1px',
  },
  name: {
    fontWeight: 'bold',
  },
  time: {
    color: '#fff',
    display: 'inline-flex',
    alignItems: 'center',
    overflow: 'hidden',
  }
};

const MusicItem = props => {
  const {
    id,
    name,
    author,
    time,
    onSelect
  } = props;

  const onPlay = () => onSelect(id);

  return (
    <li style={styles.wrapper}>
      <img onClick={onPlay} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEpElEQVRoge2az29VRRTHv1Ma+7Ao9MGDohuJRMUflYULFTHRBC0Wf+6K4goCMUEI4t6NK+OGWCNb/A+MhCARrFZC+VH8FUoruOFHhGhMEGorwsfFnMubprfv3TvvvlANZ3Nz75zz/Z5zZ+bMmblXuiUzS1xRQEBZ0tOSVkh6UNK9khZKajeVK5IuSPpF0glJA5K+ds79UZQP0QKUgHXAF8A18ss/wF7gDaCtEV+iegSYLektSe9IWmyPJyQdlHRA0o+SRiT9Kumytc+R1Cnpfkldkp6R9ISkJIDzkj6U9LFzbjzGr7xB9ACng7d6BFgPzI3AmgdsAI4GeKeA1c3wPSEtAZ8EhMeA5wrE7waOB/h9QKko/ISk0xwHuAJsBmYVSuJ5ZgFbgLGgtxcVBb7EuhtgGHi4EODanF3AiHH+DCxpFLASAB4GFhTkaxbuDmDAuE8DnbFApWA4HQTa61sVK0A7cCgYZvnnTDCxh/GL3U0RYH4wKvryGvcEE7vpcyKDP11BAujOajSb6jqxOQfZu8Bt0d7Wx98aTP76QwzYbgbH8qRYsxmhSYsZ0Ap8Zzxb6ym3AedMeVVOolD2Acsa8jyd4wXDP1+zV/DFG8CRCJJELtl1HHi/yGwHOKqZdG0txX2mtD6CJJHFwE6q1fA54E2gkC0DsNFw90ynUMaX1ePEFYAABPdPBm8PoB/oaiCGBLcDmACupvoJvGqEX0YSTArEnrVYb1yw5mvALqASGUeC2294LybPWoL2FXb9qhGSUJxz151zuyQtk9QnCUnrJJ2wIdJSE2B6OWDXlVNagN0W5UsxyGk9kqLzAH43mchx4KkIrmT0fJbWOGqNUWkzSyCm54Be4IyZXAc+Be7KwfWQ2Z5Ma/zdGqPqqqyBBPq3A+8Bf5npZbuvu3cHFpjNxbTGCWuMKjPyBhLYLQU+D4bbCPB8HZs2072xt4+dbDNX/mNDq1JraP1vJnuSfl/OGUNiXzcQpqbfIeLS72tmfyP9hnNk2K6P5gXOQFwGPpL0k6RVkn6TtEnSY865gQjIpNRJ7ZFXLMr9kc5O6RGaX6KsSWvsoFo0zosAnxQIzSsay1SLxjunU9prpBsiCBJpdhm/yXB311J63ZSORhAk0uyN1ZDh99ZSbAPOmmLN1TXFNpRmbXXXGP4Z6q03wDZTHmLmHT58bzxvZzEoUT3r3ZKDqNnHQduCl5XtoxCw2ozGKCDTNCrAcqqlTL5PGfjvE8kbmN8kH7P4UcEfygHsiAEo4Q+OwR8k34xD7DnAoPkwmHlIpQBVgJMGdJgGV+Sc3GXgW+M+RaMffPAfepKuHQEKr8VSOJcHnKPAPUUBLwqG2Rj+QLm1EPDJPK2WnZKJPQgsLJqkFCQA8AfKhawZ+BW7h+o6AbAjek5kJO0Ouh18YbgR6IjAKuNrp6EAb5SIr8WxPwyU5PcT2yXdbY//lnRI0n5JP0galf9h4E9rv0P+54L7JD0i6VlJj0tKFtGzkj6QtNM5NxHjV7Tga7O1wB78FiCvXMXvTHsbHUZF/lQzV/6nmpXyR6RLJVXke0LyPXNR0in5nd03kvqdc5eK8uGWzCT5F05QXc/Nk/+qAAAAAElFTkSuQmCC"/>
      <div style={styles.songInfo}>
        <div style={styles.name}>{name}</div>
        <div style={styles.author}>{author}</div>
      </div>

      <div style={styles.time}>{time}</div>
    </li>
  );
};

MusicItem.propTypes = {};

export default MusicItem;
