import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 120px;
  position: absolute;
  bottom: 0;
  background-color: var(--color-special-background);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 90;
`;

export const BorderStrip = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, var(--color-special-background), var(--color-text-special), var(--color-special-background));
  filter: blur(0.7px);
`;

export const ControlsContainer = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  
  @media only screen and (max-width: 768px){
    
    & .rhap_current-time {
      margin-right: 7px;
    }

    & .rhap_volume-bar-area {
      display: none;
    }

    & .rhap_volume-container {
      position: absolute;
    }
  }

  & .rhap_container {
    background-color: var(--color-special-background);
    width: 50%;
    height: 100%;

    @media only screen and (max-width: 1024px){
      & {
        width: 70%;
      }
    }

    @media only screen and (max-width: 768px){
      & {
        width: 95%;
      }
    }
  }

  & .rhap_time {
    color: white;
  }
  
  & .rhap_horizontal-reverse {
    margin-top: 13px;
  }

  & .rhap_progress-indicator {
    background-color: var(--color-text-special);
    box-shadow: 0 0 3px var(--color-text-special);
  }

  & .rhap_volume-indicator  {
    background-color: var(--color-text-special);
    opacity: 1;
  }

  & .rhap_progress-filled {
    background-color: var(--color-text-special);
  }

  & .rhap_rewind-button,
  & .rhap_forward-button {
    @media only screen and (max-width: 425px){
      & {
        display: none;
      }
    }
  }

  & .rhap_rewind-button,
  & .rhap_forward-button,
  & .rhap_play-pause-button,
  & .rhap_volume-button, 
  & .rhap_repeat-button,
  & .rhap_skip-button{
    color: var(--color-text-special);
    transition: .5s;
  }

  & .rhap_play-pause-button:hover,
  & .rhap_forward-button:hover,
  & .rhap_rewind-button:hover,
  & .rhap_volume-button:hover,
  & .rhap_repeat-button:hover,
  & .rhap_skip-button:hover {
    color: var(--color-special-background);
    filter: drop-shadow(0 0 2px var(--color-text-special));
  }

  & .rhap_play-pause-button:hover svg path,
  & .rhap_forward-button:hover svg path,
  & .rhap_rewind-button:hover svg path,
  & .rhap_volume-button:hover svg path,
  & .rhap_repeat-button:hover svg path,
  & .rhap_skip-button:hover svg path {
    stroke: var(--color-text-special);
    stroke-opacity: 0.3;
  }
`;

export const MusicInformation = styled.span`
  position: absolute;
  color: white;
  top: 15px;
  width: 50%;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap; 
  overflow: hidden;

  @media only screen and (max-width: 768px){
    & {
      width: 80%;
    }
  }

  @media only screen and (max-width: 425px){
    & {
      width: 90%;
    }
  }

  & span {
    transition: .5s;
    cursor: pointer;

    &:hover {
      color: var(--color-text-special);
    }
  }
`;
