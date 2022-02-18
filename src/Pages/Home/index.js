import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, BackgroundContainer, TitleContainer, ButtonContainer, MiniPlayerContainer, MiniPlayerWrapper, MiniPlayerLeftContent, MiniPlayerRightContent } from './styles';

//Image
import Background from '../../Images/Home/Background.jpg'

// context
import { useCurrentMusic } from '../../Context/CurrentMusic'

function Home() {

    const CurrentMusic = useCurrentMusic()
    const navigate = useNavigate();

    return (
        <Container>
            <BackgroundContainer>
                <img src={Background} alt="background" />
                <div />
            </BackgroundContainer>
            <TitleContainer>
                <h1>Promus</h1>
                <p>Encontre suas musicas favoritas e se aventure por novos estilos!</p>
                <ButtonContainer onClick={()=>{navigate('buscar')}}>
                    Começar
                </ButtonContainer>
            </TitleContainer>
            {CurrentMusic.playing && 
                <MiniPlayerContainer>
                    <MiniPlayerWrapper>
                        <MiniPlayerLeftContent/>
                        <MiniPlayerRightContent>
                            <span>
                                {CurrentMusic.musicName}
                            </span>
                        </MiniPlayerRightContent>
                    </MiniPlayerWrapper>
                </MiniPlayerContainer>
            }
        </Container>
    );
}

export default Home;




// const [music, setMusic] = useState(0)
// const querry = 'poze'
// useEffect(()=>{
//     fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${querry}&index=1&limit=1`, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
//             "x-rapidapi-key": "bbf32784a9msh9fce2a6fb68e65cp1b9eb6jsn44e8c4d6e8ac"
//         }
//     })
//     .then((response) => response.json())
//     .then((response) => {
//         setMusic(response.data)
//     })
// }, [querry])

// console.log(music ? music[0] : '')