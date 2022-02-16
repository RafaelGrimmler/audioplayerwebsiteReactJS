import styled from 'styled-components';


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

    & img:nth-child(1) {
      width: 100vw;
      height: 100vh;
      position: absolute;
    }

    & div:nth-child(2) {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(12, 24, 61, 0.55);
      box-shadow: inset 0 0 800px black;
    }
`;

export const TitleContainer = styled.div`
  width: 40%;
  height: 75%;
  position: absolute;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;

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
    color: var(--color-text-especial);
    filter: drop-shadow(0 0 1px var(--color-text-especial));
    text-shadow: none;
    border-radius: 0px;
    font-size: 22px;
  }
`;
