import React, {useState, useEffect} from 'react';

import { Container, RightArrow, LeftArrow, ListWrapper, ScrollButton, ContentBlock, AlbumImageContainer, AlbumTitle, ArtistName } from './styles';

function AlbumHomeSlideBar({content}) {

    const [informations, setInformations] = useState([])
    const [positionx, setPositionx] = useState(0)

    useEffect(()=>{
        if(content){
            content.then(info => setInformations(info))
        }
    }, [content])

    console.log(informations[0])

  return (
    <Container>
        <ScrollButton
                onClick={()=>{
                    if(positionx + 520 < 0){
                        setPositionx(positionx + 520)
                    }
                    else {
                        setPositionx(0)
                    }
                }}
        >
            <LeftArrow/>
        </ScrollButton>
        <ListWrapper 
                position={'translateX(' + positionx + 'px)'}
            >
                <ul>
                    {
                        informations.length > 0 ? 
                        informations.map(item => 
                            <li key={item.id}>
                                <ContentBlock 
                                    title={item.title}
                                >
                                    <AlbumImageContainer>
                                        <img 
                                            src={item.cover_big}
                                            alt={item.title}
                                        />
                                    </AlbumImageContainer>
                                    <AlbumTitle>
                                        {item.title}
                                    </AlbumTitle>
                                    <ArtistName
                                        title={item.artist.name}
                                    >
                                        {item.artist.name}
                                    </ArtistName>
                                </ContentBlock>
                            </li>
                        ) : ''
                    }
                </ul>
        </ListWrapper>
        <ScrollButton 
            right={0}
            onClick={()=>{
                if(positionx - 520 > -(informations.length * 260 - 20)+(window.innerWidth - 70) * 0.86){
                    setPositionx(positionx - 520)
                }
                else{
                    setPositionx(-(informations.length * 260 - 20)+(window.innerWidth - 70) * 0.86)
                }
            }}
        >
            <RightArrow/>
        </ScrollButton>
    </Container>
    );
}

export default AlbumHomeSlideBar;