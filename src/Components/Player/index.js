import React, { useEffect } from 'react';

import { Container, BorderStrip, ControlsContainer, MusicInformation } from './styles';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// context
import { useCurrentMusic } from '../../Context/CurrentMusic'
import { createRef } from 'react/cjs/react.production.min';

function Player() {

  const CurrentMusic = useCurrentMusic()
  const player = createRef()

  function onPlayHandle(){
    CurrentMusic.setPlaying(true)
  }

  function onPauseHandle(){
    CurrentMusic.setPlaying(false)
  }

  useEffect(()=>{
    if(CurrentMusic.playing){
      player.current.audio.current.play()
    }else{
      player.current.audio.current.pause();
    }
  }, [CurrentMusic.playing])

  return (
    <Container>
      <BorderStrip />
      <MusicInformation>
        {
          CurrentMusic.track && CurrentMusic.track.title
          
        }
      </MusicInformation>
      <ControlsContainer>
        <AudioPlayer
          onPlay={onPlayHandle}
          onPause={onPauseHandle}
          src={CurrentMusic.track ? CurrentMusic.track.preview : ""}
          showSkipControls={true} 
          autoPlayAfterSrcChange={true}
          ref={player}
        />
      </ControlsContainer>
    </Container>
  );
}

export default Player;