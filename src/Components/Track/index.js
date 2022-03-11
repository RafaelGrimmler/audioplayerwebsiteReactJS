import React, { useState, useEffect } from 'react';

import { Container, ImageContainer, InformationsContainer, TitleContainer, InteractiveContainer, TrackTitle, TrackArtist, ReproductionAction, PlayAction, Add, Play, ImagePlayContainer, Pause, CircleSvgContainer, Remove } from './styles';

// context
import { useCurrentMusic } from '../../Context/CurrentMusic'
import {useReproduction} from '../../Context/Reproduction'

// image
import circle from '../../Images/circle.svg'

function Track({ track, titleContainerWidth, interactiveContainerWidth, titleContainerWidthResz, reproduction }) {

  const Reproduction = useReproduction()
  const CurrentMusic = useCurrentMusic()
  const [changeTrack, setChangeTrack] = useState(false)

  const HandlePlayPause = () => {
    if(CurrentMusic.track){
      if(CurrentMusic.track === track){
        if(CurrentMusic.playing === true){
          CurrentMusic.setPlaying(false)
        }else{
          CurrentMusic.setPlaying(true)
        }
      }else{
        if(CurrentMusic.track.key === track.key && track.key){
          if(CurrentMusic.playing === true){
            CurrentMusic.setPlaying(false)
          }else{
            CurrentMusic.setPlaying(true)
          }
          return
        }
        CurrentMusic.setTrack(null)
        setChangeTrack(true)
        CurrentMusic.setPlaying(true)
      }
    }
    else{
      CurrentMusic.setTrack(track)
      CurrentMusic.setPlaying(true)
    }
    if(track.key && !CurrentMusic.reproduction){
      CurrentMusic.setReproduction(true)
    }
    else{
      if(!track.key && CurrentMusic.reproduction){
        CurrentMusic.setReproduction(false)
      }
    }
  } 

  useEffect(()=>{
    if(changeTrack){
      CurrentMusic.setTrack(track)
      setChangeTrack(false)
    }
  }, [changeTrack])

  function PlayingEffects(){
    if(CurrentMusic.track){
      if(CurrentMusic.track.key === track.key && track.key){
        return false
      }
      if(CurrentMusic.track === track){
        return false
      }
      return true
    }
    return true
  }

  const HandleAdd = () => {
    Reproduction.addTrack(track)
  }

  const HandleRemove = () => {
    Reproduction.removeTrack(track.key)
  }

  return (
      <Container>
        <ImageContainer>
          <img 
            src={track.album.cover_big || track.album.cover} 
            alt={track.title} 
          />
          <ImagePlayContainer
            opacity={PlayingEffects() ? '0' : '1'}
          >
            <CircleSvgContainer
              svg={circle}
              effect={PlayingEffects()}
              animation={CurrentMusic.playing && !(PlayingEffects()) ? true : false }
            />
            <Play
              fs={PlayingEffects() ? '38' : CurrentMusic.playing ? '0' : '38'}
              onClick={HandlePlayPause}
              display={PlayingEffects() ? 'block' : CurrentMusic.playing ? 'none' : 'block'}
            />
            <Pause
              fs={PlayingEffects() ? '0' : CurrentMusic.playing ? '38' : '0'}
              onClick={HandlePlayPause}
              display={PlayingEffects() ? 'none' : CurrentMusic.playing ? 'block' : 'none'}
            />
          </ImagePlayContainer>
        </ImageContainer>
        <InformationsContainer>
          <TitleContainer
            titleContainerWidth={titleContainerWidth}
            titleContainerWidthResz={titleContainerWidthResz}
          >
            <TrackTitle
              color={PlayingEffects() ? 'white' : 'var(--color-text-special)'}
            >
              {track.title}
            </TrackTitle>
            <TrackArtist 
              title={track.artist.name}
            >
              {track.artist.name}
            </TrackArtist>
          </TitleContainer>
          <InteractiveContainer
            interactiveContainerWidth={interactiveContainerWidth}
          >
            <ReproductionAction>
              {
                reproduction ? 
                <Remove
                  onClick={HandleRemove}
                /> :
                <Add 
                  onClick={HandleAdd}
                />
              }
            </ReproductionAction>
            <PlayAction>
              <Play 
                fs={PlayingEffects() ? '29' : CurrentMusic.playing ? '0' : '29'}
                onClick={HandlePlayPause}
                display={PlayingEffects() ? 'block' : CurrentMusic.playing ? 'none' : 'block'}
              />
              <Pause
                fs={PlayingEffects() ? '0' : CurrentMusic.playing ? '29' : '0'}
                onClick={HandlePlayPause}
                display={PlayingEffects() ? 'none' : CurrentMusic.playing ? 'block' : 'none'}
              />
            </PlayAction>
          </InteractiveContainer>
        </InformationsContainer>
      </Container>
  );
}

export default Track;