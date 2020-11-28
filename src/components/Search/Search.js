import React, { useEffect, useState } from 'react'
import Fuse from 'fuse.js'
import { TextField, FormControl, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import ComponentList from '../ComponentList/ComponentList';
import { components } from '../../components.json'

function Search() {
  const [state, setState] = useState({ components })
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    search()
  }, []);

  const search = (search = '') => {
    const options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ['name']
    }

    const fuse = new Fuse(state.components, options)
    const components = search 
      ? fuse.search(search).map(item => item.item) 
      : state.components;

    setSearchResults(components)
  }

  return (
      <FormControl fullWidth>
        <TextField
        onChange={e => search(e.target.value)}
        label="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <ComponentList searchResults={searchResults}/>
    </FormControl>
  );
};

export default Search;
