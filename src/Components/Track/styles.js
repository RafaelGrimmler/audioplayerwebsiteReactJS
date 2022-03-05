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
    width: 70px;

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
`;

export const TitleContainer = styled.div`
    height: 100%;
    width: 240px;
    position: relative;
    flex-wrap: nowrap;
`;

export const TrackTitle = styled.h2`
    width: 240px;
    height: 50%;
    font-size: 16px;
    padding-top: 6px;
    padding-left: 5px;
    padding-right: 5px;
    color: white;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const TrackArtist = styled.h2`
    width: 240px;
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
`;

export const Add = styled(IoMdAddCircle)`
    font-size: 29px;
    color: white;
    transition: .5s;
    cursor: pointer;

    &:hover {
        color: var(--color-text-special);
    }
`;

export const Play = styled(AiFillPlayCircle)`
    font-size: 29px;
    color: white;
    transition: .5s;
    cursor: pointer;

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
`;

export const PlayAction = styled.div`
    width: 50px;
    height: 50px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


