import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Container, MainContentContainer, ResultContainer, ReproductionContainer, Title, TracksContainer, NothingContent, ClearReproduction, BroomIcon, BroomContainer, Play, Pause, PlayPauseReproductionContainer } from './styles';

// components
import Navbar from '../../Components/Navbar';
import Track from '../../Components/Track';
import Loading from '../../Components/Loading';

// context
import {useReproduction} from '../../Context/Reproduction'
import {useCurrentMusic} from '../../Context/CurrentMusic'

function Search() {

    const navigator = useNavigate()
    const Reproduction = useReproduction()
    const CurrentMusic = useCurrentMusic()
    const { querry } = useParams()
    const [musics, setMusics] = useState([])
    const [index, setIndex] = useState(0)
    const [height, setHeight] = useState(0)
    const [confirmContent, setConfirmContent] = useState(null)
    const [text, setText] = useState('')
    const [changeIndex, setChangeIndex] = useState(false)
    const [changeReproductionState, setChangeReproductionState] = useState(false)
    var ReproductionKEY = 1
      
    async function FetchFunction(url, id, page){
      await fetch(`${url}${id}${page}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "2586c485fcmshc691be2f540fc1dp133582jsna421e997d391"
      }})
      .then(response => response.json())
      .then(response => {
        setMusics(musics => [...musics, response])
        if(!response.total) {
          setConfirmContent(1)
        }else{
          setConfirmContent(null)
        }
      })
      .catch(err => {
        console.error(err);
      });
    }

    useEffect(()=>{
      setMusics([])
      setHeight(0)
    }, [querry])

    useEffect(()=>{
      musics.map( items => setHeight(height + items.data.length))
    }, [musics])

    useEffect(()=>{
      if(text !== querry){
        setText(querry)
        FetchFunction('https://deezerdevs-deezer.p.rapidapi.com/search?q=', querry, `&index=${0}&limit=40`)
        setIndex(0)
      }
      if(changeIndex){
        FetchFunction('https://deezerdevs-deezer.p.rapidapi.com/search?q=', querry, `&index=${index}&limit=40`)
        setChangeIndex(false)
      }
    }, [querry, index])

    const HandleScroll = (e) => {
      if(e.target.scrollTop === (height * 65 + (height * 10 - 10) - (window.innerHeight - 305))){
        setChangeIndex(true)
        setIndex(index + 40)
      }
    }

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
        CurrentMusic.setReproduction(true)
        Reproduction.setIndexReproduction(-1)
        CurrentMusic.setPlaying(true)
        CurrentMusic.setTrack(null)
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
          <Navbar/>
          <MainContentContainer>
            <ResultContainer>
              <Title>
                Pesquisa: <span>'{querry}'</span>
              </Title>
              <TracksContainer
                onScroll={HandleScroll}
              >
                {
                  musics.length > 0 ? musics.map( items => {
                    return items.data.map(item =>
                     <li key={item.id}>
                      <Track 
                        track={item}
                        titleContainerWidth={400}
                        interactiveContainerWidth={150}
                        reproduction={false}
                      />
                    </li>
                    )
                  }) : 
                  <Loading />
                }
                {
                  (confirmContent !== null) && <NothingContent>
                    <span>
                      Sem resultados desta pesquisa.
                    </span>
                  </NothingContent>
                }
              </TracksContainer>
            </ResultContainer>
            <ReproductionContainer>
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
                    <li key={ReproductionKEY++}>
                     <Track 
                       track={item}
                       titleContainerWidth={200}
                       interactiveContainerWidth={70}
                       titleContainerWidthResz={150}
                       reproduction={true}
                     />
                   </li>
                  )
                }
                {
                  (Reproduction.getTracks().length === 0 || !Reproduction.getTracks()) && 
                  <NothingContent>
                    <span>
                      Não Há nenhuma música na lista de reprodução
                    </span>
                  </NothingContent>
                }                
              </TracksContainer>
            </ReproductionContainer>
          </MainContentContainer>
      </Container>
    );
}

export default Search;