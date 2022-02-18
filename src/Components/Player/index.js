import React from 'react';

import { Container, BorderStrip, ControlsContainer, MusicInformation } from './styles';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Player() {
  return (
    <Container>
      <BorderStrip />
      <MusicInformation>
          MC poze - Vida Louca 
        </MusicInformation>
      <ControlsContainer>
        <AudioPlayer
          src="https://cdns-preview-f.dzcdn.net/stream/c-f73300d457eb5fb6ad13670c7f9eb8e9-3.mp3"
          showSkipControls={true} 
        />
      </ControlsContainer>
    </Container>
  );
}

export default Player;