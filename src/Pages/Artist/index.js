import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, MainContentContainer, ArtistInformationsContainer, TracksContainer, ArtistImage, ArtistImageContainer, ArtistImageShadow, ArtistNameContainer, TrackList } from './styles';

// components
import Navbar from '../../Components/Navbar'
import Track from '../../Components/Track';
import Loading from '../../Components/Loading';

function Artists() {
  
  const { id } = useParams()
  const [artist, setArtist] = useState(null)
  const [tracks, setTracks] = useState(false)

  useEffect(()=>{
      fetch(`https://deezerdevs-deezer.p.rapidapi.com/artist/${id}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
          'X-RapidAPI-Key': '2586c485fcmshc691be2f540fc1dp133582jsna421e997d391'
        }
      })
      .then(response => response.json())
      .then(response => {
        setArtist(response)
        getTracks(response)
      })
      .catch(err => console.error(err));
  }, [id])

  function getTracks(informations){
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${informations.name}&index=0&limit=100`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "2586c485fcmshc691be2f540fc1dp133582jsna421e997d391"
      }})
      .then(response => response.json())
      .then(response => setTracks(response.data))
      .catch(err => {
        console.error(err);
      });
  }

  return (
      <Container>
        <Navbar/>

        <MainContentContainer>
          <ArtistInformationsContainer>
            <ArtistImageContainer>
              {artist ? <ArtistImage src={artist.picture_xl || artist.picture_big}/> : ''}
              {artist ? (
              <ArtistImageShadow />
              ) : ''}
            </ArtistImageContainer>
            <ArtistNameContainer>
                <span>{artist ? artist.name : ''}</span>
            </ArtistNameContainer>
          </ArtistInformationsContainer>

          <TracksContainer>
            <TrackList>
                {
                  tracks ? tracks.map( item => {
                     return (<li key={item.id}>
                      <Track 
                        track={item}
                        titleContainerWidth={400}
                        interactiveContainerWidth={150}
                        reproduction={false}
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