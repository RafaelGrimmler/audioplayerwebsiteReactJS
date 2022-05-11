import styled from 'styled-components';
import { RiArrowDropRightLine, RiArrowDropLeftLine } from 'react-icons/ri'

export const RightArrow = styled(RiArrowDropRightLine)`
  font-size: 60px;
  color: var(--color-text-special);
  position: absolute;
    transition: 0.5s;
  opacity: 0;
  filter: drop-shadow(0 0 1px black);
`;

export const LeftArrow = styled(RiArrowDropLeftLine)`
  font-size: 60px;
  color: var(--color-text-special);
  position: absolute;
    transition: 0.5s;
  opacity: 0;
  filter: drop-shadow(0 0 1px black);
`;

export const Container = styled.div`
    height: 200px;
    width: 86%;
    margin-top: 40px;
    margin-left: 7%;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    overflow-x: scroll;
    transition: 0.5s;

    &::-webkit-scrollbar {
        height: 0px;
    }

    & ul {
        display: flex;

        & li + li {
            margin-left: 20px;
        }
    }

    &:hover ${RightArrow},
    &:hover ${LeftArrow} {
        opacity: 1;
    }
`;

export const ListWrapper = styled.div`
    //width: ${props => props.width}px;
    height: 200px;
    width: 100%;
    transform: ${props => props.position};
    transition: 0.5s;
`;

export const ContentBlock = styled.div`
    width: 200px;
    height: 200px;
    position: relative;
    border-radius: 5px;
    background-color: var(--color-special-background);
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;

    & span {
        color: white;
        margin-top: 15px;
        width: 170px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        transition: .5s;
    }
    
    & span:hover {
        color: var(--color-text-special);
    }
`;

export const ArtistImageContainer = styled.div`
    width: 140px;
    height: 140px;

    & img {
        margin-top: 5px;
        width: 100%;
        height: 100%;
        border-radius: 35%;
        filter: drop-shadow(0 0 5px black);
    }
`;

export const ScrollButton = styled.button`
    width: 30px;
    height: 100%;
    position: absolute;
    border: none;
    cursor: pointer;
    background-color: rgba(0,0,0,0);
    z-index: 50;
    right: ${props => props.right};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;

    &:hover {
        background-color: rgba(255, 140,0,0.3);
    }

    @media only screen and (max-width: 768px){
        & {
            display: none;
        }
    }
`;

export const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
