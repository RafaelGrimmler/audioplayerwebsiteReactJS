import React, { useState, useEffect } from 'react';

import { Container, Title, NoSongsContainer, TracksContainer,Pause, PlayPauseReproductionContainer, Play, BroomIcon, 
  BroomContainer, ClearReproduction } from './styles';

// context
import { useReproduction } from '../../Context/Reproduction'

// components
import Track from '../../Components/Track'
import {useCurrentMusic} from '../../Context/CurrentMusic'

function ReproductionTracks() {

  const Reproduction = useReproduction()
  const CurrentMusic = useCurrentMusic()
  const [changeReproductionState, setChangeReproductionState] = useState(false)

  const HandleClearReproduction = () => {
    Reproduction.clearTracks()
    CurrentMusic.setTrack(null)
    CurrentMusic.setPlaying(false)
    CurrentMusic.setReproduction(false)
  }

  const HandleReproductionPause = () => {
    CurrentMusic.setPlaying(false)
  }

  const HandleReproductionPlay = () => {
    if(!CurrentMusic.reproduction && Reproduction.getTracks().length > 0){
      CurrentMusic.setTrack(null)
      CurrentMusic.setReproduction(true)
      Reproduction.setIndexReproduction(-1)
      CurrentMusic.setPlaying(true)
      setChangeReproductionState(true)
    }else{
      CurrentMusic.setPlaying(true)
    }
  }

  useEffect(()=>{
    if(changeReproductionState){
      CurrentMusic.setTrack(Reproduction.changeReproductionIndex())
      setChangeReproductionState(false)
    }
  }, [changeReproductionState])

  return (
    <Container>
        <Title>
            Reprodução
        </Title>
        <ClearReproduction>
          <PlayPauseReproductionContainer>
            { 
            (CurrentMusic.reproduction) ?
              (CurrentMusic.playing) ? 
              <Pause 
                title='pausar'
                onClick={HandleReproductionPause}
              />
                : 
              <Play
                title='Tocar'
                onClick={HandleReproductionPlay}
              />
              : 
              <Play
                title='Tocar'
                onClick={HandleReproductionPlay}
              />
            }
          </PlayPauseReproductionContainer>
          <BroomContainer 
            onClick={HandleClearReproduction}
            title='Limpar lista'
          >
            <BroomIcon/>                  
          </BroomContainer>
        </ClearReproduction>
        <TracksContainer>
        {
          (Reproduction.getTracks().length > 0 || Array.isArray(Reproduction.getTracks())) &&
          Reproduction.getTracks().map(item => 
            <li key={item.id}>
              <Track 
                track={item}
                titleContainerWidth={500}
                interactiveContainerWidth={70}
                titleContainerWidthResz={250}
                reproduction={true}
              />
            </li>
          )
        }
        </TracksContainer>
        {
          (Reproduction.getTracks().length === 0 || !Reproduction.getTracks()) &&
          <NoSongsContainer>
            <span>Não Há nenhuma música na lista de reprodução</span>
          </NoSongsContainer>
        }
    </Container>
  );
}

export default ReproductionTracks;