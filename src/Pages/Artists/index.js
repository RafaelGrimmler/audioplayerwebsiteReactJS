import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, MainContentContainer, ContentContainer, ArtistContainer, ArtistInformations, ArtistTracks, ArtistImageContainer, ArtistImage, ArtistImageShadow, ArtistNameContainer, TrackList } from './styles';

// components
import Navbar from '../../Components/Navbar'
import Loading from '../../Components/Loading';
import Track from '../../Components/Track';

function Artists() {

  const navigator = useNavigate()

  const artistsList = [4516223 ,4611283, 13, 7068771, 63912472, 288166, 4545763, 7674918, 8691, 526197, 1429841, 13447203, 4068342, 7068771]
  const [artists, setArtists] = useState(null)
  const [tracks, setTracks] = useState(null)
  
  async function FetchFunction(url, id){
    return await fetch(`${url}${id}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "2586c485fcmshc691be2f540fc1dp133582jsna421e997d391"
    }})
    .then(response => response.json())
    .then(response => response)
    .catch(err => {
      console.error(err);
    });
  }

  useEffect(()=>{
    Promise.all(
      artistsList.map( id => FetchFunction('https://deezerdevs-deezer.p.rapidapi.com/artist/', id))
    )
    .then(response => setArtists(response))
  }, [])

  useEffect(()=>{
    if(artists){
      Promise.all(
        artists.map( id => FetchFunction(`https://deezerdevs-deezer.p.rapidapi.com/search?q=`, id.name))
      )
      .then(response => setTracks(response))
    }
  }, [artists])

  return (
      <Container>
        <Navbar/>

        <MainContentContainer>
          <ContentContainer>
            { tracks ?
              Array.from({ length: tracks.length })
              .map((_ , index) => index)
              .map((index) => (
                <ArtistContainer 
                  key={index}
                  title={artists[index].name}
                >
                  <ArtistInformations>
                    <ArtistImageContainer
                      onClick={() => navigator(`/artista/${artists[index].id}`)}
                    >
                      <ArtistImage 
                        src={artists[index].picture_xl || artists[index].picture_big}
                      />
                      <ArtistImageShadow />
                    </ArtistImageContainer>
                    <ArtistNameContainer>
                      <span
                        onClick={() => navigator(`/artista/${artists[index].id}`)}
                      >{artists[index].name}</span>
                    </ArtistNameContainer>
                  </ArtistInformations>
                  <ArtistTracks>
                    <TrackList>
                      {
                        tracks[index].data.map( item => {
                          return (<li key={item.id}>
                           <Track 
                             track={item}
                             titleContainerWidth={400}
                             interactiveContainerWidth={150}
                             reproduction={false}
                           />
                         </li>)
                       })
                      }
                    </TrackList>
                  </ArtistTracks>
                </ArtistContainer>
              )) : <Loading />
            }
          </ContentContainer>
        </MainContentContainer>
      </Container>
  );
}

export default Artists;



// ArtistImageContainer, ArtistImage, ArtistImageShadow, ArtistNameContainer 