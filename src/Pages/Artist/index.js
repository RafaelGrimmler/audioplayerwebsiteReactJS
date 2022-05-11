import React from 'react';

import { Container, MainContentContainer, ArtistInformationsContainer, TracksContainer } from './styles';

// components
import Navbar from '../../Components/Navbar'

function Artists() {
  return (
      <Container>
        <Navbar/>

        <MainContentContainer>
          <ArtistInformationsContainer>

          </ArtistInformationsContainer>

          <TracksContainer>
          
          </TracksContainer>
        </MainContentContainer>
      </Container>
  );
}

export default Artists;