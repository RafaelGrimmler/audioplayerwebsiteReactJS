import styled from 'styled-components';
import { GiBroom } from 'react-icons/gi'
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'

export const Container = styled.div`
    width: 86%;
    margin-top: 70px;
    margin-left: 7%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    overflow-x: hidden;
    transition: 0.5s;
    background-color: var(--color-special-background);
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 50px;

    @media only screen and (max-width: 560px){
      & {
        padding-left: 10px;
        padding-right: 10px;
        width: 95%;
        margin-left: 2.5%;
      }
    }
`;

export const Title = styled.h2`
    color: white;
    width: 100%;
    font-size: 36px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--color-general-background);
    padding-bottom: 30px;

    @media only screen and (max-width: 768px){
      & {
        font-size: 20px;
      }
    }
`;

export const NoSongsContainer = styled.div`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;

    & span {
        color: white;
    }
`;

export const TracksContainer = styled.ul`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    gap: 10px;
    display: flex;
    flex-direction: column;
`;

export const Play = styled(AiFillPlayCircle)`
  font-size: 40px;
  color: white;
  transition: .5s;
  cursor: pointer;
  color: var(--color-text-special);
  filter: drop-shadow(0 0px 1px black);

  @media only screen and (max-width: 768px){
    & {
      font-size: 30px;
    }
  }
`;

export const Pause = styled(AiFillPauseCircle)`
  font-size: 40px;
  color: white;
  transition: .5s;
  cursor: pointer;
  color: var(--color-text-special);
  filter: drop-shadow(0 0px 1px black);

  @media only screen and (max-width: 768px){
    & {
      font-size: 30px;
    }
  }
`;

export const PlayPauseReproductionContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: .5s;

  &:hover ${Play},
  &:hover ${Pause}{
    transform: scale(1.2);
    color: var(--color-general-background);
    filter: drop-shadow(0 0px 2px var(--color-text-special));
  }

  &:hover {
    background-color: var(--color-text-special);
  }
`;

export const BroomIcon = styled(GiBroom)`
  font-size: 20px;
  transition: 0.5s;
  color: var(--color-general-background);
`;

export const BroomContainer = styled.div`
  width: 35px;
  height: 35px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-text-special);
  cursor: pointer;
  transition: .5s;
  filter: drop-shadow(0 0px 1px black);

  &:hover ${BroomIcon}{
    color: var(--color-text-special);
    font-size: 25px;
  }

  &:hover {
    transform: scale(1.2);
    background-color: var(--color-general-background);
    filter: drop-shadow(0 0px 2px var(--color-text-special));
  }

  @media only screen and (max-width: 768px){
    & {
      width: 27px;
      height: 27px;
    }
  }
`;

export const ClearReproduction = styled.div`
  height: 45px;
  width: 100px;
  color: white;
  transition: .5s;
  position: absolute;
  top: 5px;
  right: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;