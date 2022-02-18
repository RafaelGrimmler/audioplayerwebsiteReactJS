import React from 'react';

import { Container, BorderStrip, RightArrow, LeftArrow, ArrowsContainer } from './styles';

function Navbar() {
  return (
      <Container>
          <BorderStrip />
          <ArrowsContainer>
            <RightArrow/>
            <LeftArrow/>
          </ArrowsContainer>
      </Container>
  );
}

export default Navbar;