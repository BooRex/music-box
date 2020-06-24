import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMusicListStart } from '../../../store/music/actions';
import { StyledSearchBar, StyledSearchInput } from './styles';

export const SearchBar = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onChange = e => {
    const targetValue = e.target.value;
    setValue(targetValue);

    // Воизбежание многократных запросов
    if (targetValue.length > 2) {
      dispatch(fetchMusicListStart(`?q=${targetValue}`));
    }
  };

  return (
    <StyledSearchBar>
      <StyledSearchInput
        name='search-bar'
        value={value}
        onChange={onChange}
      />
    </StyledSearchBar>
  );
};
