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

export const Container = styled.div`
  width: 80px;
  height: calc(100vh - 120px);
  background-color: var(--color-special-background);
  position: relative;
  transition: width .5s;

  &:hover {
    width: 350px;
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

