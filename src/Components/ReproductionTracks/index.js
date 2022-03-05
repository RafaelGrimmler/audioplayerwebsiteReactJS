import React from 'react';

import { Container, Title, NoSongsContainer } from './styles';

function ReproductionTracks() {
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