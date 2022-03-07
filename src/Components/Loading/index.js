import React from 'react';

import { Container, LoadingBlock, FirstInsideBlock, SecondInsideBlock, MusicIcon } from './styles';

function Loading() {
  return (
      <Container>
          <LoadingBlock>
            <FirstInsideBlock>
            </FirstInsideBlock>
            
            <SecondInsideBlock>
                    <MusicIcon/> 
             </SecondInsideBlock>
          </LoadingBlock>
      </Container>
  );
}

export default Loading;