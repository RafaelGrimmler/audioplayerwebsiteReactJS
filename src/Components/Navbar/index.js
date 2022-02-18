import React, { useState } from 'react';

import { Container, BorderStrip, RightArrow, LeftArrow, ArrowsContainer, LinksContainer, ItemSelectedBall, Item } from './styles';

function Navbar() {

  const list = ['Início', 'Artistas', 'Gêneros', 'Albuns', 'PlayList']
  const [selected, setSelected] = useState(0)
  const [hoverContainer, setHoverContainer] = useState(false)

  return (
      <Container 
        onMouseOver={()=> setHoverContainer(true)}
        onMouseOut={()=> setHoverContainer(false)}
        >
          <BorderStrip />
          <ArrowsContainer>
            <RightArrow/>
            <LeftArrow/>
          </ArrowsContainer>
          <LinksContainer hoverContainer={hoverContainer}>
            <input type="text" />
            <ul>
              <ItemSelectedBall top={selected * 50 + 'px'}/>
              {Array.from({ length: 5 })
                  .map((_ , index) => index)
                  .map((index) => (
                    <Item 
                      key={index} 
                      selected={index === selected ? true : false}
                      onMouseOver={() => setSelected(index)}
                    >{list[index]}</Item>
                  ))}
            </ul>
          </LinksContainer>
      </Container>
  );
}

export default Navbar;