import styled, { keyframes } from 'styled-components';
import { RiArrowDropRightLine, RiArrowDropLeftLine } from 'react-icons/ri'
import { BsSearch, BsPeople, BsMusicNoteList } from 'react-icons/bs'
import { AiOutlineHome, AiOutlineOrderedList } from 'react-icons/ai'
import { FaCompactDisc } from 'react-icons/fa'

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
`;

export const LeftArrow = styled(RiArrowDropLeftLine)`
  font-size: 0px;
  color: var(--color-text-special);
  position: absolute;
  transition: .5s;
  animation-name: ${LeftArrowMove};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

export const SearchGlass = styled(BsSearch)`
  font-size: 22px;
  color: var(--color-text-special);
  transition: .5s;
`;

export const HomeIcon = styled(AiOutlineHome)`
  font-size: 23px;
  color: ${props => props.selected ? 'white' : 'var(--color-navbar-background-list)'};
  transition: .5s;
  z-index: 99;
  filter: ${props => props.selected ? 'drop-shadow(0 0 1px black)' : ''};
`;

export const ArtistIcon = styled(BsPeople)`
  font-size: 23px;
  color: ${props => props.selected ? 'white' : 'var(--color-navbar-background-list)'};
  transition: .5s;
  z-index: 99;
  filter: ${props => props.selected ? 'drop-shadow(0 0 1px black)' : ''};
`;

export const AlbumIcon = styled(FaCompactDisc)`
  font-size: 23px;
  color: ${props => props.selected ? 'white' : 'var(--color-navbar-background-list)'};
  transition: .5s;
  z-index: 99;
  filter: ${props => props.selected ? 'drop-shadow(0 0 1px black)' : ''};
`;

export const PlayListIcon = styled(AiOutlineOrderedList)`
  font-size: 23px;
  color: ${props => props.selected ? 'white' : 'var(--color-navbar-background-list)'};
  transition: .5s;
  z-index: 99;
  filter: ${props => props.selected ? 'drop-shadow(0 0 1px black)' : ''};
`;

export const GenreIcon = styled(BsMusicNoteList)`
  font-size: 23px;
  color: ${props => props.selected ? 'white' : 'var(--color-navbar-background-list)'};
  transition: .5s;
  z-index: 99;
  filter: ${props => props.selected ? 'drop-shadow(0 0 1px black)' : ''};
`;

export const LinksContainer = styled.div`
  width: ${props => props.hoverContainer ? '200px' : '0px'};
  height: 90%;
  margin-left: 20px;
  transition: .5s;

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

  & form input {
    width: ${props => props.hoverContainer ? '100%' : '0%'};
    padding-left: ${props => props.hoverContainer ? '15px' : '0'};
    padding-right: ${props => props.hoverContainer ? '15px' : '0'};
    height: 40px;
    border-radius: 40px;
    transition: .5s;
    background-color: var(--color-navbar-background-list);
    border: ${props => props.hoverContainer ? '1px solid var(--color-text-special)' : '0px solid'};
    color: white;
    font-size: 20px;
  }

  & form button {
    width: ${props => props.hoverContainer ? '40px' : '0px'};
    height: 90%;
    background-color: var(--color-navbar-background-list);
    border: none;
    position: absolute;
    right: 1px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  & form input::placeholder {
    font-size: 20px;
    font-style: italic;
    font-stretch: extra-condensed;
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

  &:hover {
    width: 300px;
  }

  &:hover ${RightArrow} {
    font-size: 0px;
  }

  &:hover ${LeftArrow} {
    font-size: 35px;
  }

`;

export const BorderStrip = styled.div`
  position: absolute;
  right: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(to bottom, var(--color-special-background), var(--color-text-special), var(--color-special-background));
  filter: blur(0.7px);
`;

export const ArrowsContainer = styled.div`
  width: 20px;
  height: 100%;
  position: absolute;
  right: 0;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

export const Item = styled.li`
  width: ${props => props.hoverContainer ? '100%' : '0%'};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-navbar-background-list);
  padding-left: ${props => props.hoverContainer ? '15px' : '0px'};
  padding-right: ${props => props.hoverContainer ? '9px' : '0px'};
  border-radius: 30px;
  color: ${props => props.selected ? 'var(--color-text-special)' : 'white'};
  cursor: pointer;
  transition: .5s;

  & + & {
    margin-top: 10px;
  }

  & span {
    width: ${props => props.hoverContainer ? '0%' : '100%'};
    overflow: ${props => props.hoverContainer ? 'unset' : 'hidden'};
  }
`;

