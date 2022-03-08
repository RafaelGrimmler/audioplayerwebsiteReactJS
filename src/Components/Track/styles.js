import styled from 'styled-components';
import { IoMdAddCircle } from 'react-icons/io'
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'
import { keyframes } from 'styled-components';

export const ImagePlayContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: ${props=>props.opacity};
    top: 0;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
  height: 65px;
  width: 100%;
  background-color: var(--color-general-background);
  display: flex;

  &:hover ${ImagePlayContainer} {
      opacity: 1;
  }
`;

export const ImageContainer = styled.div`
    height: 100%;
    width: 60px;
    position: relative;

    & img {
        width: 100%;
        height: 100%;
    }   
`;

export const InformationsContainer = styled.div`
    width: calc(100% - 70px);
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 463px){
        & {
            padding-right: 0px;
        }
    }
`;

export const TitleContainer = styled.div`
    height: 100%;
    width: 400px;
    position: relative;
    flex-wrap: nowrap;

    @media only screen and (max-width: 1333px){
        & {
            width: 200px;
        }
    }

    @media only screen and (max-width: 1200px){
        & {
            width: 400px;
        }
    }

    @media only screen and (max-width: 878px){
        & {
            width: 280px;
        }
    }

    @media only screen and (max-width: 648px){
        & {
            width: 200px;
        }
    }

    @media only screen and (max-width: 560px){
        & {
            width: 150px;
        }
    }

    @media only screen and (max-width: 375px){
      & {
          width: 120px;
      }
    }
`;

export const TrackTitle = styled.h2`
    width: 100%;
    height: 50%;
    font-size: 16px;
    padding-top: 6px;
    padding-left: 5px;
    padding-right: 5px;
    color: ${props=>props.color};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    transition: .5s;

    @media only screen and (max-width: 648px){
        & {
            font-size: 13px;
        }
    }
    
    @media only screen and (max-width: 375px){
      & {
          font-size: 11px;
      }
    }

    &:hover {
        color: var(--color-text-special);
    }
`;

export const TrackArtist = styled.h2`
    width: 100%;
    height: 50%;
    font-size: 13px;
    padding-bottom: 6px;
    padding-left: 5px;
    padding-right: 5px;
    color: #bababa;
    cursor: pointer;
    transition: .5s;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media only screen and (max-width: 648px){
        & {
            font-size: 11px;
        }
    }

    &:hover {
        color: var(--color-text-special);
    }
`;

export const InteractiveContainer = styled.div`
    width: 150px;
    min-width: 150px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    @media only screen and (max-width: 768px){
        & {
            width: 100px;
            min-width: 100px;
        }
    }

    @media only screen and (max-width: 375px){
      & {
          padding: 2px;
          width: 70px;
          min-width: 70px;
      }
    }
`;

export const Add = styled(IoMdAddCircle)`
    font-size: 29px;
    color: white;
    transition: .5s;
    cursor: pointer;
    filter: drop-shadow(0 2px 3px black);

    &:hover {
        color: var(--color-text-special);
    }
`;

export const Play = styled(AiFillPlayCircle)`
    font-size: ${props => props.fs}px;
    color: white;
    transition: .5s;
    cursor: pointer;
    filter: drop-shadow(0 2px 3px black);

    &:hover {
        color: var(--color-text-special);
        transform: scale(1.2);
    }
`;

export const Pause = styled(AiFillPauseCircle)`
    font-size: ${props => props.fs}px;
    color: white;
    transition: .5s;
    cursor: pointer;
    filter: drop-shadow(0 2px 3px black);

    &:hover {
        color: var(--color-text-special);
        transform: scale(1.2);
    }
`;

export const ReproductionAction = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    
  @media only screen and (max-width: 375px){
      & {
          width: 40px;
          height: 40px;
      }
  }
`;

export const PlayAction = styled.div`
    width: 50px;
    height: 50px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 375px){
      & {
          width: 40px;
          height: 40px;
          margin-left: 3px;
      }
  }
`;

const circleAnimation = keyframes`
    0%{
        transform: rotate(0deg) scale(1.1);
        filter: drop-shadow(0 0 1px red);
    }
    25%{
        filter: drop-shadow(0 0 1px blue);
    }
    50%{
        transform: rotate(180deg) scale(1);
        filter: drop-shadow(0 0 1px yellow);
    }
    75%{
        filter: drop-shadow(0 0 1px purple);
    }
    100%{
        transform: rotate(360deg) scale(1.1);
        filter: drop-shadow(0 0 1px var(--color-text-special));
    }
`;

export const CircleSvgContainer = styled.div`
    width: 55px;
    height: 55px;
    position: absolute;
    background-image: url(${props=>props.svg});
    background-size: 53px;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 50%;
    overflow: hidden;
    opacity: ${props=>props.effect ? '0' : props=>props.animation ? '1' : '0'};

    animation-name: ${props=>props.animation ? circleAnimation : ''};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`;


