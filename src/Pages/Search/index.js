import React from 'react';

import { Container } from './styles';

// components
import Player from '../../Components/Player'
import Navbar from '../../Components/Navbar'

function Search() {
  return (
      <Container>
        <Navbar/>
        <Player/>
      </Container>
  );
}

export default Search;