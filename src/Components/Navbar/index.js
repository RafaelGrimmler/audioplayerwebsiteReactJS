import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, BorderStrip, RightArrow, LeftArrow, ArrowsContainer, LinksContainer, ItemSelectedBall, Item, SearchGlass, HomeIcon, ArtistIcon, AlbumIcon, PlayListIcon, UpArrow, DownArrow } from './styles';

function Navbar() {

  const navigator = useNavigate()

  const list = ['Início', 'Artistas', 'Álbuns', 'Reprodução']
  const [selected, setSelected] = useState(0)
  const [hoverContainer, setHoverContainer] = useState(false)
  const [text, setText] = useState('')

  const HandleForm = e => {
    e.preventDefault()
    navigator(`/buscar/${text}`)
  }

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
            <form
              onSubmit={HandleForm}
            >
              <input
                type="text" 
                placeholder='pesquisar'
                value={text}
                onChange={e=>setText(e.target.value)}
              />
              <button 
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
              {Array.from({ length: 4 })
                  .map((_ , index) => index)
                  .map((index) => (
                    <Item 
                      key={index}
                      hoverContainer={hoverContainer}
                      selected={index === selected ? true : false}
                      onMouseOver={() => setSelected(index)}
                      onClick={()=>navigator(`/`)}
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
                      {index === 2 && <AlbumIcon 
                        selected={index === selected ? true : false}
                        hoverContainer={hoverContainer}
                      />}
                      {index === 3 && <PlayListIcon 
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