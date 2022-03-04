import React from 'react';

import { Container, MainContentContainer } from './styles';

// components
import Navbar from '../../Components/Navbar' 
import ArtistHomeSlideBar from '../../Components/ArtistHomeSlideBar' 

function Search() {

  const artistsIds = ['63912472', '7068771', '13', '4611283', '288166', '4545763', '7674918', '5576810', '68221232']
  const artistList = Promise.all(
    artistsIds.map( id => FetchFunction(id))
  )
  async function FetchFunction(id){
    return await fetch(`https://deezerdevs-deezer.p.rapidapi.com/artist/${id}`, {
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

  return (
      <Container>
        <Navbar/>

        <MainContentContainer>

          <ArtistHomeSlideBar 
            content={artistList}
          />

        </MainContentContainer>
      </Container>
  );
}

export default Search;