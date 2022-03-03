import React from 'react';

import { Container, BorderStrip, ControlsContainer, MusicInformation } from './styles';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// context
import { useCurrentMusic } from '../../Context/CurrentMusic'

function Player() {

  const CurrentMusic = useCurrentMusic()

  const name = 'MC poze - Vida Louca'

  function onPlayHandle(){
    CurrentMusic.setMusicName(name)
    CurrentMusic.setPlaying(true)
  }

  function onPauseHandle(){
    CurrentMusic.setPlaying(false)
  }

  return (
    <Container>
      <BorderStrip />
      <MusicInformation>
          {name} 
      </MusicInformation>
      <ControlsContainer>
        <AudioPlayer
          onPlay={onPlayHandle}
          onPause={onPauseHandle}
          src="https://cdns-preview-f.dzcdn.net/stream/c-f73300d457eb5fb6ad13670c7f9eb8e9-3.mp3"
          showSkipControls={true} 
        />
      </ControlsContainer>
    </Container>
  );
}

export default Player;