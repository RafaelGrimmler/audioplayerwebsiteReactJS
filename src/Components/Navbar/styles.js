import styled, { keyframes } from 'styled-components';
import { RiArrowDropRightLine, RiArrowDropLeftLine } from 'react-icons/ri'

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

export const LinksContainer = styled.div`
  width: 200px;
  height: 90%;
  margin-left: 20px;
  transform: .5s;

  & ul {
    width: 100%;
    margin-top: 15px;
    position: relative;
    transform: .5s;
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
  border: 5px solid var(--color-navbar-background-list);
  transition: .5s;
`;

export const Item = styled.li`
  width: ${props => props.selected ? '100%' : '90%'};
  height: 40px;
  display: flex;
  align-items: center;
  background-color: var(--color-navbar-background-list);
  padding-left: 15px;
  border-radius: 30px;
  color: ${props => props.selected ? 'var(--color-text-special)' : 'white'};
  cursor: pointer;
  transition: .5s;

  & + & {
    margin-top: 10px;
  }
`;

