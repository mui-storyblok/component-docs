import React, { useEffect, useState } from 'react'
import Fuse from 'fuse.js'
import { TextField, FormControl, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import ComponentList from '../ComponentList/ComponentList';
import { components } from '../../components.json'

const filterOutUnwantedComponents = (components) => {
  // TODO - we can remove Mui once we clean up and remove the legacy components from SB
  // also check out these and clean up if we can
  return components.filter(component => !/Mui|Blok|teaser|Page|page|grid|feature/.test(component.name));
}

function Search() {
  const [state, setState] = useState({ components: filterOutUnwantedComponents(components) })
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
        label="Search components by name"
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
