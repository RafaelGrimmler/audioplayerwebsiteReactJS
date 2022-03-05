import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Container, MainContentContainer, ResultContainer, ReproductionContainer, Title, TracksContainer } from './styles';

// components
import Navbar from '../../Components/Navbar';
import Track from '../../Components/Track';

function Search() {

    const navigator = useNavigate()
    const { querry } = useParams()
    const [musics, setMusics] = useState(null)

    async function FetchFunction(url, id, page){
      await fetch(`${url}${id}${page}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "2586c485fcmshc691be2f540fc1dp133582jsna421e997d391"
      }})
      .then(response => response.json())
      .then(response => setMusics(response))
      .catch(err => {
        console.error(err);
      });
    }

    useEffect(()=>{
      FetchFunction('https://deezerdevs-deezer.p.rapidapi.com/search?q=', querry, `&index=0&limit=25`)
    }, [querry])

    return (
      <Container>
          <Navbar/>
          <MainContentContainer>
            <ResultContainer>
              <Title>
                Pesquisa: <span>'{querry}'</span>
              </Title>
              <TracksContainer>
                {
                  musics ? musics.data.map(item => 
                  <li 
                    key={item.id}
                  >
                    <Track  
                      track={item}
                    />
                  </li>
                  ) : ''
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