import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Container, MainContentContainer, ArtistInformationsContainer, TracksContainer, ArtistImage, ArtistImageContainer, ArtistImageShadow, ArtistNameContainer, TrackList } from './styles';

// components
import Navbar from '../../Components/Navbar'
import Track from '../../Components/Track';
import Loading from '../../Components/Loading';

function Artists() {
  
  const { id } = useParams()
  const navigator = useNavigate()
  
  const [album, setAlbum] = useState(null)

  useEffect(()=>{
      fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/${id}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
          'X-RapidAPI-Key': '2586c485fcmshc691be2f540fc1dp133582jsna421e997d391'
        }
      })
      .then(response => response.json())
      .then(response => {
        setAlbum(response)
      })
      .catch(err => console.error(err));
  }, [id])

  return (
      <Container>
        <Navbar/>

        <MainContentContainer>
          <ArtistInformationsContainer>
            <ArtistImageContainer>
              {album ? <ArtistImage src={album.cover_xl || ''}/> : ''}
              {album ? (
              <ArtistImageShadow />
              ) : ''}
            </ArtistImageContainer>
            <ArtistNameContainer>
                <span>{album ? album.title : ''}</span>
                <span
                  onClick={() => navigator(`/artista/${album.artist.id}`)}
                >{album ? album.artist.name : ''}</span>
            </ArtistNameContainer>
          </ArtistInformationsContainer>

          <TracksContainer>
            <TrackList>
                {
                  album ? album.tracks.data.map( item => {
                     return (<li key={item.id}>
                      <Track 
                        track={item}
                        titleContainerWidth={400}
                        interactiveContainerWidth={150}
                        reproduction={false}
                        image={album.cover_xl}
                      />
                    </li>)
                  }) : 
                  <Loading />
                }
            </TrackList>
          </TracksContainer>
        </MainContentContainer>
      </Container>
  );
}

export default Artists;