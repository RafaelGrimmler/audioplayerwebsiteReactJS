import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Container, MainContentContainer, ResultContainer, ReproductionContainer, Title, TracksContainer } from './styles';

// components
import Navbar from '../../Components/Navbar';
import Track from '../../Components/Track';
import Loading from '../../Components/Loading';

function Search() {

    const navigator = useNavigate()
    const { querry } = useParams()
    const [musics, setMusics] = useState([])
    const [index, setIndex] = useState(0)
    const [height, setHeight] = useState(0)

    async function FetchFunction(url, id, page){
      await fetch(`${url}${id}${page}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "2586c485fcmshc691be2f540fc1dp133582jsna421e997d391"
      }})
      .then(response => response.json())
      .then(response => {
        setMusics(musics => [...musics, response])
        setHeight(height + response.data.length)
      })
      .catch(err => {
        console.error(err);
      });
    }

    useEffect(()=>{
      FetchFunction('https://deezerdevs-deezer.p.rapidapi.com/search?q=', querry, `&index=${index}&limit=40`)
    }, [querry, index])
  
    const HandleScroll = (e) => {
      if(e.target.scrollTop === (height * 65 + (height * 10 - 10) - 605)){
        setIndex(index + 40)
      }
    }

    return (
      <Container>
          <Navbar/>
          <MainContentContainer>
            <ResultContainer>
              <Title>
                Pesquisa: <span>'{querry}'</span>
              </Title>
              <TracksContainer
                onScroll={HandleScroll}
              >
                {
                  musics.length > 0 ? musics.map( items => {
                    return items.data.map(item =>
                     <li key={item.id}>
                      <Track 
                        track={item}
                      />
                    </li>
                    )
                  }) : 
                  <Loading />
                }
              </TracksContainer>
            </ResultContainer>
            <ReproductionContainer>
              <Title>
                Reprodução
              </Title>
            </ReproductionContainer>
          </MainContentContainer>
      </Container>
    );
}

export default Search;