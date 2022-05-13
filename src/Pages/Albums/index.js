import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, MainContentContainer, ContentContainer, ArtistContainer, ArtistInformations, ArtistTracks, ArtistImageContainer, ArtistImage, ArtistImageShadow, ArtistNameContainer, TrackList } from './styles';

// components
import Navbar from '../../Components/Navbar'
import Loading from '../../Components/Loading';
import Track from '../../Components/Track';

function Albums() {

  const navigator = useNavigate()

  const albumList = [119606, 122366, 81773452, 395161]
  const [albums, setAlbums] = useState(null)
  
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
      albumList.map( id => FetchFunction('https://deezerdevs-deezer.p.rapidapi.com/album/', id))
    )
    .then(response => setAlbums(response))
  }, [])

  return (
      <Container>
        <Navbar/>

        <MainContentContainer>
          <ContentContainer>
            { albums ?
              Array.from({ length: albums.length })
              .map((_ , index) => index)
              .map((index) => (
                <ArtistContainer 
                  key={index}
                  title={albums[index].title}
                >
                  <ArtistInformations>
                    <ArtistImageContainer
                      onClick={() => navigator(`/album/${albums[index].id}`)}
                    >
                      <ArtistImage 
                        src={albums[index].cover_xl || ''}
                      />
                      <ArtistImageShadow />
                    </ArtistImageContainer>
                    <ArtistNameContainer>
                      <span
                        onClick={() => navigator(`/album/${albums[index].id}`)}
                      >{albums[index].title}</span>
                      <span
                        onClick={() => navigator(`/artista/${albums[index].artist.id}`)}
                      >{albums[index].artist.name}</span>
                    </ArtistNameContainer>
                  </ArtistInformations>
                  <ArtistTracks>
                    <TrackList>
                      {
                        albums[index].tracks.data.map( item => {
                          return (<li key={item.id}>
                           <Track 
                             track={item}
                             titleContainerWidth={400}
                             interactiveContainerWidth={150}
                             reproduction={false}
                             image={albums[index].cover_big}
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

export default Albums; 