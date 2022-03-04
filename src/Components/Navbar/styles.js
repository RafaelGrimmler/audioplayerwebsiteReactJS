import styled, { keyframes } from 'styled-components';
import { RiArrowDropRightLine, RiArrowDropLeftLine } from 'react-icons/ri'
import { BsSearch, BsPeople, BsMusicNoteList } from 'react-icons/bs'
import { AiOutlineHome, AiOutlineOrderedList } from 'react-icons/ai'
import { FaCompactDisc } from 'react-icons/fa'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

const RightArrowMove = keyframes`
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0px);
  }
`;

const DownArrowMove = keyframes`
  0% {
    transform: translateY(3px);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(3px);
  }
`;

const UpArrowMove = keyframes`
  0% {
    transform: translateY(3px);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(3px);
  }
`;

const LeftArrowMove = keyframes`
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0px);
  }
`;

export const RightArrow = styled(RiArrowDropRightLine)`
  font-size: 35px;
  color: var(--color-text-special);
  position: absolute;
  transition: .5s;
  animation-name: ${RightArrowMove};
  animation-duration: 2s;
  animation-iteration-count: infinite;

  @media only screen and (max-width: 768px){
    & {
      display: none;
    }
  }
`;

export const UpArrow = styled(MdKeyboardArrowUp)`  
  @media only screen and (max-width: 768px){
    & {
      font-size: ${props => props.hoverContainer ? '0px' : '35px' };
      color: var(--color-text-special);
      position: absolute;
      transition: .5s;
      animation-name: ${UpArrowMove};
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
  }
`;

export const DownArrow = styled(MdKeyboardArrowDown)`
  @media only screen and (max-width: 768px){
    & {
      font-size: ${props => props.hoverContainer ? '35px' : '0px' };
      color: var(--color-text-special);
      position: absolute;
      transition: .5s;
      animation-name: ${DownArrowMove};
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
  }
`;

export const LeftArrow = styled(RiArrowDropLeftLine)`
  font-size: 0px;
  color: var(--color-text-special);
  position: absolute;
  transition: .5s;
  animation-name: ${LeftArrowMove};
  animation-duration: 2s;
  animation-iteration-count: infinite;

  @media only screen and (max-width: 768px){
    & {
      display: none;
    }
  }
`;

export const SearchGlass = styled(BsSearch)`
  font-size: 22px;
  color: var(--color-text-special);
  transition: .5s;
`;

export const HomeIcon = styled(AiOutlineHome)`
  font-size: 23px;
  color: ${props => props.hoverContainer ? props.selected ? 'white' : 'var(--color-navbar-background-list)' : 'white' };
  transition: .5s;
  z-index: 80;
  filter: ${props => props.hoverContainer ? props.selected ? 'drop-shadow(0 0 1px black)' : '' : 'drop-shadow(0 0 1px black)'};

  @media only screen and (max-width: 768px){
    & {
      filter: drop-shadow(0 0 1px black);
      color: white;
    }
  }
`;

export const ArtistIcon = styled(BsPeople)`
  font-size: 23px;
  color: ${props => props.hoverContainer ? props.selected ? 'white' : 'var(--color-navbar-background-list)' : 'white' };
  transition: .5s;
  z-index: 80;
  filter: ${props => props.hoverContainer ? props.selected ? 'drop-shadow(0 0 1px black)' : '' : 'drop-shadow(0 0 1px black)'};

  @media only screen and (max-width: 768px){
    & {
      filter: drop-shadow(0 0 1px black);
      color: white;
    }
  }
`;

export const AlbumIcon = styled(FaCompactDisc)`
  font-size: 23px;
  color: ${props => props.hoverContainer ? props.selected ? 'white' : 'var(--color-navbar-background-list)' : 'white' };
  transition: .5s;
  z-index: 80;
  filter: ${props => props.hoverContainer ? props.selected ? 'drop-shadow(0 0 1px black)' : '' : 'drop-shadow(0 0 1px black)'};
  
  @media only screen and (max-width: 768px){
    & {
      filter: drop-shadow(0 0 1px black);
      color: white;
    }
  }
`;

export const PlayListIcon = styled(AiOutlineOrderedList)`
  font-size: 23px;
  color: ${props => props.hoverContainer ? props.selected ? 'white' : 'var(--color-navbar-background-list)' : 'white' };
  transition: .5s;
  z-index: 80;
  filter: ${props => props.hoverContainer ? props.selected ? 'drop-shadow(0 0 1px black)' : '' : 'drop-shadow(0 0 1px black)'};
  
  @media only screen and (max-width: 768px){
    & {
      filter: drop-shadow(0 0 1px black);
      color: white;
    }
  }
`;

export const GenreIcon = styled(BsMusicNoteList)`
  font-size: 23px;
  color: ${props => props.hoverContainer ? props.selected ? 'white' : 'var(--color-navbar-background-list)' : 'white' };
  transition: .5s;
  z-index: 80;
  filter: ${props => props.hoverContainer ? props.selected ? 'drop-shadow(0 0 1px black)' : '' : 'drop-shadow(0 0 1px black)'};
  
  @media only screen and (max-width: 768px){
    & {
      filter: drop-shadow(0 0 1px black);
      color: white;
    }
  }
`;

export const LinksContainer = styled.div`
  width: ${props => props.hoverContainer ? '200px' : '40px'};
  height: 90%;
  margin-left: ${props => props.hoverContainer ? '20px' : '7px'};
  transition: .5s;

  @media only screen and (max-width: 768px){
    & {
      width: 420px;
      margin-left: 0px;
      height: unset;
    }
  }

  @media only screen and (max-width: 500px){
    & {
      width: 220px;
    }
  }

  & ul {
    width: 100%;
    margin-top: 15px;
    position: relative;
    transition: .5s;
  }

  & form {
    position: relative;
    display: flex;
    align-items: center;
  }

  & form {
    height: 40px;
  }

  & form input {
    width: ${props => props.hoverContainer ? '100%' : '0%'};
    padding-left: ${props => props.hoverContainer ? '15px' : '0'};
    padding-right: ${props => props.hoverContainer ? '15px' : '0'};
    display: ${props => props.hoverContainer ? 'block' : 'none'};
    height: 40px;
    border-radius: 40px;
    transition: .5s;
    background-color: var(--color-navbar-background-list);
    border: ${props => props.hoverContainer ? '1px solid var(--color-text-special)' : '0px solid'};
    color: white;
    font-size: 20px;

    @media only screen and (max-width: 768px){
      & {
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
        border: 1px solid var(--color-text-special);
      }
    }
  }

  & form button {
    width: 40px;
    height: ${props => props.hoverContainer ? '90%' : '100%'};
    background-color: var(--color-navbar-background-list);
    border: none;
    position: absolute;
    right: 1px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media only screen and (max-width: 768px){
      & {
        height: 90%;
      }
    }
  }

  & form input::placeholder {
    font-size: 20px;
    font-style: italic;
    font-stretch: extra-condensed;
  }
`;

export const ArrowsContainer = styled.div`
  width: 20px;
  height: 100%;
  position: absolute;
  right: 0;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media only screen and (max-width: 768px){
    & {
      top: ${props => props.hoverContainer ? '1px' : '-30px' };
      background-color: var(--color-special-background);
      border-top: ${props => props.hoverContainer ? 'none' : '1px solid var(--color-text-special)' };
      border-bottom: ${props => props.hoverContainer ? '1px solid var(--color-text-special)' : 'none' };
      height: 30px;
      border-top-right-radius: ${props => props.hoverContainer ? 'none' : '60%' };
      border-top-left-radius: ${props => props.hoverContainer ? 'none' : '60%' };
      border-bottom-right-radius: ${props => props.hoverContainer ? '60%' : 'none' };
      border-bottom-left-radius: ${props => props.hoverContainer ? '60%' : 'none' };
      width: 100vw;
      margin-right: 0px;
    }
  }
`;

export const Container = styled.div`
  width: 70px;
  height: calc(100vh - 120px);
  background-color: var(--color-special-background);
  position: relative;
  transition: width .5s;
  display: flex;
  align-items: center;
  z-index: 60;

  &:hover {
    width: 300px;
  }

  &:hover ${RightArrow} {
    font-size: 0px;
  }

  &:hover ${LeftArrow} {
    font-size: 35px;
  }

  @media only screen and (max-width: 768px){
    & {
      width: 100vw;
      height: calc(100vh - 120px);
      top: ${props => props.hoverContainer ? '0px' : 'calc(100vh - 120px)'};
      justify-content: center;
    }

    &:hover {
        width: unset;
      }
    }

`;

export const BorderStrip = styled.div`
  position: absolute;
  right: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(to bottom, var(--color-special-background), var(--color-text-special), var(--color-special-background));
  filter: blur(0.7px);

  @media only screen and (max-width: 768px){
    & {
      top: 0;
      width: 100vw;
      height: 1px;
      background: linear-gradient(to right, var(--color-special-background), var(--color-text-special), var(--color-special-background));
      filter: blur(0.7px);
    }
  }
`;

export const ItemSelectedBall = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-text-special);
  position: absolute;
  right: 0;
  top: ${props => props.top};
  border: 3px solid var(--color-navbar-background-list);
  transition: .5s;
  transform: ${props => props.hoverContainer ? '' : 'translateX(-250px)'};

  @media only screen and (max-width: 768px){
    & {
      display: none;
    }
  }
`;

export const Item = styled.li`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: ${props => props.hoverContainer ? 'space-between' : 'center'};
  background-color: var(--color-navbar-background-list);
  padding-left: ${props => props.hoverContainer ? '15px' : '0px'};
  padding-right: ${props => props.hoverContainer ? '9px' : '0px'};
  border-radius: ${props => props.hoverContainer ? '30px' : '50%'};
  color: ${props => props.selected ? 'var(--color-text-special)' : 'white'};
  cursor: pointer;
  transition: .5s;

  @media only screen and (max-width: 768px){
    & {
      justify-content: space-between;
      border-radius: 30px;
      padding-left: 15px;
      padding-right: 15px;
      color: white;
    }
  }

  & + & {
    margin-top: 10px;
  }

  & span {
    width: 0%;
    overflow: ${props => props.hoverContainer ? 'unset' : 'hidden'};

    @media only screen and (max-width: 768px){
      & {
        overflow: unset;
      }
    }
  }
`;

