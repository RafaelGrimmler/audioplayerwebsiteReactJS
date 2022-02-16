import React, { useEffect, useState } from 'react';

import { Container, BackgroundContainer, TitleContainer, ButtonContainer } from './styles';

//Image
import Background from '../../Images/Home/Background.jpg'

function Home() {

    const [music, setMusic] = useState(0)
    const querry = 'poze'

    useEffect(()=>{
        fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${querry}&index=1&limit=1`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "bbf32784a9msh9fce2a6fb68e65cp1b9eb6jsn44e8c4d6e8ac"
            }
        })
        .then((response) => response.json())
        .then((response) => {
            setMusic(response.data)
        })
    }, [querry])

    console.log(music ? music[0] : '')

    // music && <audio controls><source src={music[0].preview} type="audio/mp3"/></audio>

    return (
        <Container>
            <BackgroundContainer>
                <img src={Background} alt="background" />
                <div />
            </BackgroundContainer>
            <TitleContainer>
                <h1>Promus</h1>
                <p>Encontre suas musicas favoritas e se aventure por novos estilos!</p>
                <ButtonContainer>
                    Começar
                </ButtonContainer>
            </TitleContainer>
        </Container>
    );
}

export default Home;