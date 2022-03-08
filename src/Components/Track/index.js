import React, { useState, useEffect } from 'react';

import { Container, ImageContainer, InformationsContainer, TitleContainer, InteractiveContainer, TrackTitle, TrackArtist, ReproductionAction, PlayAction, Add, Play, ImagePlayContainer, Pause, CircleSvgContainer } from './styles';

// context
import { useCurrentMusic } from '../../Context/CurrentMusic'

// image
import circle from '../../Images/circle.svg'

function Track({ track }) {

  const CurrentMusic = useCurrentMusic()
  const [changeTrack, setChangeTrack] = useState(false)

  const HandlePlay = () => {
    if(CurrentMusic.track){
      if(CurrentMusic.track === track){
        if(CurrentMusic.playing === true){
          CurrentMusic.setPlaying(false)
        }else{
          CurrentMusic.setPlaying(true)
        }
      }else{
        CurrentMusic.setTrack(null)
        setChangeTrack(true)
        CurrentMusic.setPlaying(true)
      }
    }
    else{
      CurrentMusic.setTrack(track)
      CurrentMusic.setPlaying(true)
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
      if(CurrentMusic.track === track){
        return false
      }
      return true
    }
    return true
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
              onClick={HandlePlay}
            />
            <Pause
              fs={PlayingEffects() ? '0' : CurrentMusic.playing ? '38' : '0'}
              onClick={HandlePlay}
            />
          </ImagePlayContainer>
        </ImageContainer>
        <InformationsContainer>
          <TitleContainer>
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
          <InteractiveContainer>
            <ReproductionAction>
              <Add />
            </ReproductionAction>
            <PlayAction>
              <Play 
                fs={PlayingEffects() ? '29' : CurrentMusic.playing ? '0' : '29'}
                onClick={HandlePlay}
              />
              <Pause
                fs={PlayingEffects() ? '0' : CurrentMusic.playing ? '29' : '0'}
                onClick={HandlePlay}
              />
            </PlayAction>
          </InteractiveContainer>
        </InformationsContainer>
      </Container>
  );
}

export default Track;