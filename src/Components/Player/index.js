import React, { useEffect, useState } from 'react';

import { Container, BorderStrip, ControlsContainer, MusicInformation } from './styles';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// context
import { useCurrentMusic } from '../../Context/CurrentMusic'
import { useReproduction } from '../../Context/Reproduction'
import { createRef } from 'react/cjs/react.production.min';

function Player() {

  const CurrentMusic = useCurrentMusic()
  const Reproduction = useReproduction()
  const player = createRef()
  const [changeStage, setChangeStage] = useState(false)
  const [changeStageToPrevious, setChangeStageToPrevious] = useState(false)

  function onPlayHandle(){
    CurrentMusic.setPlaying(true)
  }

  function onPauseHandle(){
    CurrentMusic.setPlaying(false)
  }

  function onEndedHandle(){
    if(CurrentMusic.reproduction){
      CurrentMusic.setTrack(null)
      setChangeStage(true)
    }
  }

  function onClickNext(){
    if(CurrentMusic.reproduction){
      CurrentMusic.setTrack(null)
      setChangeStage(true)
    }
  }

  function onClickPrevious(){
    if(CurrentMusic.reproduction){
      CurrentMusic.setTrack(null)
      setChangeStageToPrevious(true)
    }
  }

  useEffect(()=>{
    if(changeStage){
      CurrentMusic.setTrack(Reproduction.changeReproductionIndex())
      if(Reproduction.changeReproductionIndex() === undefined){
        CurrentMusic.setPlaying(false)
        CurrentMusic.setReproduction(false)
      }
      setChangeStage(false)
    }
    if(changeStageToPrevious){
      CurrentMusic.setTrack(Reproduction.changeReproductionIndexPrevious)
      setChangeStageToPrevious(false)
    }
  }, [changeStage, changeStageToPrevious])

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
        <span>
          {CurrentMusic.track && CurrentMusic.track.artist.name}
        </span>
        {' - '}
        <span>
           {CurrentMusic.track && CurrentMusic.track.title}
        </span>
      </MusicInformation>
      <ControlsContainer>
        <AudioPlayer
          onPlay={onPlayHandle}
          onPause={onPauseHandle}
          onEnded={onEndedHandle}
          onClickNext={onClickNext}
          onClickPrevious={onClickPrevious}
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