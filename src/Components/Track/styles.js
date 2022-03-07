import styled from 'styled-components';
import { IoMdAddCircle } from 'react-icons/io'
import { AiFillPlayCircle } from 'react-icons/ai'

export const Container = styled.div`
  height: 65px;
  width: 100%;
  background-color: var(--color-general-background);
  display: flex;
`;

export const ImageContainer = styled.div`
    height: 100%;
    width: 60px;

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
    color: white;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

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
    font-size: 29px;
    color: white;
    transition: .5s;
    cursor: pointer;
    filter: drop-shadow(0 2px 3px black);

    &:hover {
        color: var(--color-text-special);
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


