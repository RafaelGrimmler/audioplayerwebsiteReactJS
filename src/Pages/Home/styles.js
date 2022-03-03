import styled, { keyframes } from 'styled-components';
import Circle from '../../Images/Home/Circle.svg'


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundContainer = styled.div`
  width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 95;

    & img:nth-child(1) {
      width: 100vw;
      height: 100vh;
      position: absolute;

      @media only screen and (max-width: 668px){
        & {
          object-fit: cover;
        }
      }
    }

    & div:nth-child(2) {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(12, 24, 61, 0.55);
      box-shadow: inset 0 0 800px black;
    }
`;

export const TitleContainer = styled.main`
  width: 40%;
  height: 75%;
  position: absolute;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  z-index: 95;

  @media only screen and (max-width: 668px){
    & {
      width: 55%;
    }
  }

  @media only screen and (max-width: 375px){
    & {
      width: 65%;
    }
  }

  & h1 {
    text-align: center;
    color: white;
    filter: drop-shadow(0 1px 1px black);
    text-shadow: 0 -1px 1px black;
    font-size: 55px;

    @media only screen and (max-width: 425px){
      & {
        font-size: 40px;
      }
    }
  }

  & p {
    text-align: center;
    color: white;
    filter: drop-shadow(0 1px 1px black);
    text-shadow: 0 -1px 1px black;
    font-size: 20px;
    margin-top: 40px;

    @media only screen and (max-width: 425px){
      & {
        font-size: 18px;
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 65px;
  color: white;
  filter: drop-shadow(0 1px 1px black);
  text-shadow: 0 -1px 1px black;
  border: 2px solid black;
  font-size: 20px;
  cursor: pointer;
  border-radius: 40px;
  transition: .5s;

  &:hover {
    color: var(--color-text-special);
    filter: drop-shadow(0 0 1px var(--color-text-special));
    text-shadow: none;
    border-radius: 0px;
    font-size: 22px;
  }
`;

const Emerge = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const MiniPlayerContainer = styled.section`
  width: 200px;
  height: 100px;
  background-color: var(--color-general-background);
  border-radius: 40px;
  position: absolute;
  bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .5s;
  animation-name: ${Emerge};
  animation-duration: 2s;
  z-index: 95;
`;

export const MiniPlayerWrapper = styled.div`
  height: 90%;
  width: 94%;
  border-radius: 37px;
  border: 2px solid var(--color-text-special);
  display: flex;
  transition: .5s;
`;

const MiniPlayerLeftContentAnimation = keyframes`
  0%{
    filter: drop-shadow(0 0 2px var(--color-text-special));
    transform: scale(0.95) rotate(0deg);
  }
  25%{
    filter: drop-shadow(0 0 4px red);
    transform: scale(1) rotate(90deg);
  }
  50%{
    filter: drop-shadow(0 0 4px white);
    transform: scale(1.05) rotate(180deg);
  }
  75%{
    filter: drop-shadow(0 0 4px blue);
    transform: scale(1) rotate(90deg);
  }
  100%{
    filter: drop-shadow(0 0 2px var(--color-text-special));
    transform: scale(0.95) rotate(0deg);
  }
`;

export const MiniPlayerLeftContent = styled.div`
  width: 35%;
  height: 100%;
  border-bottom-left-radius: 37px;
  border-top-left-radius: 37px;
  background-image: ${`url(${Circle})`};
  background-position: center center;
  background-repeat: no-repeat;
  filter: drop-shadow(0 0 10px var(--color-text-special));
  animation-name: ${MiniPlayerLeftContentAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  transition: .5s;
`;

export const MiniPlayerRightContent = styled.div`
  width: 65%;
  height: 100%;
  border-bottom-right-radius: 37px;
  border-top-right-radius: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .5s;

  & span {
    width: 80%;
    max-height: 80%;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    color: white;
    transition: .5s;
  }
`;