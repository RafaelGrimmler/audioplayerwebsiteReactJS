import React, {useState, useEffect} from 'react';

import { Container, RightArrow, LeftArrow, ListWrapper, ScrollButton, ContentBlock, AlbumImageContainer, AlbumTitle, LoadingContainer } from './styles';

import Loading from '../../Components/Loading'

function AlbumHomeSlideBar({content}) {

    const [informations, setInformations] = useState([])
    const [positionx, setPositionx] = useState(0)

    useEffect(()=>{
        if(content){
            content.then(info => setInformations(info))
        }
    }, [content])

  return (
    <Container>
        {
            informations.length > 0 ? 
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
            </ScrollButton> : ''
        }
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
                                </ContentBlock>
                            </li>
                        ) : 
                        <LoadingContainer>
                            <Loading/>
                        </LoadingContainer>
                    }
                </ul>
        </ListWrapper>
        {
            informations.length > 0 ?
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
            </ScrollButton> : ''
        }
    </Container>
    );
}

export default AlbumHomeSlideBar;