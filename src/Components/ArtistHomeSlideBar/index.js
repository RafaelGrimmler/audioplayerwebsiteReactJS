import React, { useEffect, useState } from 'react';

import { Container, ContentBlock, ArtistImageContainer, ScrollButton, RightArrow, LeftArrow, ListWrapper } from './styles';

function ArtistHomeSlideBar({ content }) {

    const [informations, setInformations] = useState([])
    const [positionx, setPositionx] = useState(0)

    useEffect(()=>{
        if(content){
            content.then(info => setInformations(info))
        }
    }, [content])

    return (
        <Container
            width={informations.length * 220 - 20}
        >
            <ScrollButton
                onClick={()=>{
                    if(positionx + 440 < 0){
                        setPositionx(positionx + 440)
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
                                    title={item.name}
                                >
                                    <ArtistImageContainer>
                                        <img 
                                            src={item.picture_big || item.picture}
                                            alt={item.name}
                                        />
                                    </ArtistImageContainer>
                                    <span>
                                        {item.name}
                                    </span>
                                </ContentBlock>
                            </li>
                        ) : ''
                    }
                </ul>
            </ListWrapper>
            <ScrollButton 
                right={0}
                onClick={()=>{
                    if(positionx - 440 > -(informations.length * 220 - 20)+(window.innerWidth - 70) * 0.86){
                        setPositionx(positionx - 440)
                    }
                    else{
                        setPositionx(-(informations.length * 220 - 20)+(window.innerWidth - 70) * 0.86)
                    }
                }}
            >
                <RightArrow/>
            </ScrollButton>
        </Container>
    );
}

export default ArtistHomeSlideBar;