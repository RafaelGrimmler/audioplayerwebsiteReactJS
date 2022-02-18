import React, { useState } from 'react';

import { Container, BorderStrip, RightArrow, LeftArrow, ArrowsContainer, LinksContainer, ItemSelectedBall, Item, SearchGlass, HomeIcon, ArtistIcon, AlbumIcon, PlayListIcon, GenreIcon } from './styles';

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
          <LinksContainer 
            hoverContainer={hoverContainer}
          >
            <form>
              <input 
                type="text" 
                placeholder='pesquisar'
                name='music'
              />
              <button 
                name='music'
                type='submit'
              >
                <SearchGlass
                  hoverContainer={hoverContainer}
                />
              </button>
            </form>
            <ul>
              <ItemSelectedBall 
                top={selected * 50 + 'px'}
                hoverContainer={hoverContainer}
              />
              {Array.from({ length: 5 })
                  .map((_ , index) => index)
                  .map((index) => (
                    <Item 
                      key={index}
                      hoverContainer={hoverContainer}
                      selected={index === selected ? true : false}
                      onMouseOver={() => setSelected(index)}
                    >
                      <span>{list[index]}</span>
                      {index === 0 && <HomeIcon 
                        selected={index === selected ? true : false}
                      />}
                      {index === 1 && <ArtistIcon 
                        selected={index === selected ? true : false}
                      />}
                      {index === 2 && <GenreIcon 
                        selected={index === selected ? true : false}
                      />}
                      {index === 3 && <AlbumIcon 
                        selected={index === selected ? true : false}
                      />}
                      {index === 4 && <PlayListIcon 
                        selected={index === selected ? true : false}
                      />}
                    </Item>
                  ))}
            </ul>
          </LinksContainer>
      </Container>
  );
}

export default Navbar;