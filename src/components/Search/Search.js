import React, { useEffect, useState } from 'react'
import Fuse from 'fuse.js'
import { TextField } from '@material-ui/core';
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
    <>
      <TextField 
        onChange={e => search(e.target.value)}
        variant="outlined"
      />

      <ComponentList searchResults={searchResults}/>
    </>
  );
};

export default Search;
