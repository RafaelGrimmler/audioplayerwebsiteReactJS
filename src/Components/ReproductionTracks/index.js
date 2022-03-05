import React from 'react';

import { Container, Title, NoSongsContainer } from './styles';

// context
import { useReproduction } from '../../Context/Reproduction'

function ReproductionTracks() {

    const reproduction = useReproduction()

  return (
      <Container>
          <Title>
              Reprodução
          </Title>
          <NoSongsContainer>
              <span>Não Há nenhuma música na lista de reprodução</span>
          </NoSongsContainer>
      </Container>
  );
}

export default ReproductionTracks;