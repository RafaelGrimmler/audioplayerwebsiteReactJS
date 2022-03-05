import React from 'react';

import { Container, ImageContainer, InformationsContainer, TitleContainer, InteractiveContainer, TrackTitle, TrackArtist, ReproductionAction, PlayAction, Add, Play } from './styles';

function Track({ track }) {

  console.log(track)

  return (
      <Container>
        <ImageContainer>
          <img 
            src={track.album.cover_big || track.album.cover} 
            alt={track.title} 
          />
        </ImageContainer>
        <InformationsContainer>
          <TitleContainer>
            <TrackTitle>
              {track.title}
            </TrackTitle>
            <TrackArtist 
              title={track.artist.name}
            >
              {track.artist.name}
            </TrackArtist>
          </TitleContainer>
          <InteractiveContainer>
            <ReproductionAction>
              <Add />
            </ReproductionAction>
            <PlayAction>
              <Play />
            </PlayAction>
          </InteractiveContainer>
        </InformationsContainer>
      </Container>
  );
}

export default Track;