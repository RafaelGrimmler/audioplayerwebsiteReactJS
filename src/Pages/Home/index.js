import React from 'react';

import { Container, MainContentContainer } from './styles';

// components
import Navbar from '../../Components/Navbar' 
import ArtistHomeSlideBar from '../../Components/ArtistHomeSlideBar' 
import AlbumHomeSlideBar from '../../Components/AlbumHomeSlideBar' 
import ReproductionTracks from '../../Components/ReproductionTracks' 

function Search() {

  // ARTISTS
  const artistsIds = ['63912472', '7068771', '13', '4611283', '288166', '4545763', '7674918', '5576810', '68221232', '246791', '1644275', '1429841', '8691']
  const artistList = Promise.all(
    artistsIds.map( id => FetchFunction('https://deezerdevs-deezer.p.rapidapi.com/artist/', id))
  )

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

  // ALBUMS

  const albumsIds = ['280055352', '277183122', '206786622', '54740792', '286915642', '273739992', '264223132', '395161', '324200', '125748', '121836132']
  const albumsList = Promise.all(
    albumsIds.map( id => FetchFunction('https://deezerdevs-deezer.p.rapidapi.com/album/', id))
  )

  return (
      <Container>
        <Navbar/>

        <MainContentContainer>

          <ArtistHomeSlideBar 
            content={artistList}
          />
          <AlbumHomeSlideBar
            content={albumsList}
          />
          <ReproductionTracks />

        </MainContentContainer>
      </Container>
  );
}

export default Search;