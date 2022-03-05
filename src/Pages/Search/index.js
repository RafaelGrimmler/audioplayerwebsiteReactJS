import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, MainContentContainer } from './styles';

// components
import Navbar from '../../Components/Navbar';

function Search() {

    const navigator = useNavigate()

    return (
      <Container>
          <Navbar/>
          <MainContentContainer>

          </MainContentContainer>
      </Container>
    );
}

export default Search;