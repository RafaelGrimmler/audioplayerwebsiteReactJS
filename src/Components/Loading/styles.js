import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { GiMusicSpell } from 'react-icons/gi'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnimationBlock = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

export const LoadingBlock = styled.div`
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    background-color: var(--color-general-background);
    border: 1px solid rgba(0,0,0,0.7);
    box-shadow: 0 2px 5px black;
`;

export const FirstInsideBlock = styled.div`
    height: 150px;
    width: 150px;
    display: flex;
    background: conic-gradient(var(--color-text-special) 20deg, transparent 120deg);
    align-items: center;
    justify-content: center;
    position: absolute;
    filter: drop-shadow(0 0 5px var(--color-text-special));
    
    animation-name: ${AnimationBlock};
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
`;

export const SecondInsideBlock = styled.div`
    height: 80px;
    width: 80px;
    position: absolute;
    border-radius: 50%;
    background-color: var(--color-general-background);
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
`;

export const MusicIcon = styled(GiMusicSpell)`
    font-size: 40px;
    color: var(--color-text-special);
`;
