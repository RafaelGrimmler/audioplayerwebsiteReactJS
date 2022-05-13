import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, ImageContainer, InformationsContainer, TitleContainer, InteractiveContainer, TrackTitle, TrackArtist, ReproductionAction, PlayAction, Add, Play, ImagePlayContainer, Pause, CircleSvgContainer, Remove } from './styles';

// context
import { useCurrentMusic } from '../../Context/CurrentMusic'
import {useReproduction} from '../../Context/Reproduction'

// image
import circle from '../../Images/circle.svg'

function Track({ track, titleContainerWidth, interactiveContainerWidth, titleContainerWidthResz, reproduction, image}) {

  const navigator = useNavigate()
  const Reproduction = useReproduction()
  const CurrentMusic = useCurrentMusic()
  const [changeTrack, setChangeTrack] = useState(false)
  const [changeRemove, setChangeRemove] = useState(false)
  const [changeTrackByRemove, setChangeTrackByRemove] = useState(false)

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
      if(track.key){
        Reproduction.changeReproductionIndexByPlay(track.key)
      }
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
      if(CurrentMusic.reproduction){
        Reproduction.changeReproductionIndexByPlay(track.key)
      }
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
    if(CurrentMusic.track && CurrentMusic.track.key === track.key && track.key){
      CurrentMusic.setTrack(null)
      setChangeTrackByRemove(true)
    }
    setChangeRemove(true)
  }

  useEffect(()=>{
    if(changeRemove){
      if(changeTrackByRemove){
        CurrentMusic.setTrack(Reproduction.changeReproductionIndexByRemove(track.key))
        setChangeTrackByRemove(false)
        if(!CurrentMusic.playing){
          CurrentMusic.setPlaying(true)
        }
        if(Reproduction.changeReproductionIndexByRemove(track.key) === undefined){
          CurrentMusic.setReproduction(false)
        }
      }
      Reproduction.removeTrack(track.key)
      setChangeRemove(false)
    }
  }, [changeRemove])

  return (
      <Container>
        <ImageContainer>
          <img 
            src={image || track.album.cover_big || track.album.cover} 
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
              onClick={() => navigator(`/artista/${track.artist.id}`)}
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