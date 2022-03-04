import React, { useState } from 'react';

import { Container, BorderStrip, RightArrow, LeftArrow, ArrowsContainer, LinksContainer, ItemSelectedBall, Item, SearchGlass, HomeIcon, ArtistIcon, AlbumIcon, PlayListIcon, GenreIcon, UpArrow, DownArrow } from './styles';

function Navbar() {

  const list = ['Início', 'Artistas', 'Gêneros', 'Álbuns', 'PlayList']
  const [selected, setSelected] = useState(0)
  const [hoverContainer, setHoverContainer] = useState(false)

  return (
      <Container 
        onMouseOver={()=> setHoverContainer(true)}
        onMouseOut={()=> setHoverContainer(false)}
        hoverContainer={hoverContainer}
        >
          <BorderStrip />
          <ArrowsContainer 
            hoverContainer={hoverContainer}
            onClick={()=> hoverContainer ? setHoverContainer(false) : setHoverContainer(true)}
          >
            <RightArrow/>
            <LeftArrow/>
            <UpArrow 
              hoverContainer={hoverContainer}
            />
            <DownArrow 
              hoverContainer={hoverContainer}
            />
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
                        hoverContainer={hoverContainer}
                      />}
                      {index === 1 && <ArtistIcon 
                        selected={index === selected ? true : false}
                        hoverContainer={hoverContainer}
                      />}
                      {index === 2 && <GenreIcon 
                        selected={index === selected ? true : false}
                        hoverContainer={hoverContainer}
                      />}
                      {index === 3 && <AlbumIcon 
                        selected={index === selected ? true : false}
                        hoverContainer={hoverContainer}
                      />}
                      {index === 4 && <PlayListIcon 
                        selected={index === selected ? true : false}
                        hoverContainer={hoverContainer}
                      />}
                    </Item>
                  ))}
            </ul>
          </LinksContainer>
      </Container>
  );
}

export default Navbar;