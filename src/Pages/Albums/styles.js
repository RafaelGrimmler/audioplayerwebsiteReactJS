import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-general-background);
  overflow: hidden;
`;

export const MainContentContainer = styled.main`
  width: calc(100vw - 70px);
  margin-left: 70px;
  height: calc(100vh - 120px);
  position: absolute;
  z-index: 20;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: var(--color-special-background);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-text-special);
  }
  
  @media only screen and (max-width: 768px){
    & {
      margin-left: 0px;
      width: 100vw;
    }

    &::-webkit-scrollbar {
      width: 0px;
    }
  }

`;

export const ArtistContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;

  @media only screen and (max-width: 1108px){
    & { 
      flex-direction: column;
      height: 700px;
      align-items: center;
    }
  }

  @media only screen and (max-width: 425px){
    & { 
      height: 350px;
    }
  }
`;

export const ContentContainer = styled.section`
  width: 90%;
  height: 90%;
  overflow-y: scroll;
  gap: 10px;
  
  &::-webkit-scrollbar {
    width: 6px;
    background-color: var(--color-special-background);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-text-special);
  }

  @media only screen and (max-width: 1108px){
    &::-webkit-scrollbar {
      width: 0px;
    }
  }

  & ${ArtistContainer} + ${ArtistContainer} {
    margin-top: 10px;
  }
`;

export const ArtistInformations = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1245px){
    & { 
      width: 220px;
    }
  }
`;

export const ArtistImageContainer = styled.div`
  width: 77%;
  height: 300px;
  border-radius: 40px;
  position: relative;
  cursor: pointer;

  @media only screen and (max-width: 1245px){
    & { 
      height: 250px;
    }
  }
`;

export const ArtistImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 40px;
  position: absolute;
  border: none;
`;

export const ArtistImageShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 40px;
  background: linear-gradient(90deg, rgba(0,0,0,0.6), rgba(0,0,0,0.2));
`;

export const ArtistNameContainer = styled.div`
  width: 90%;
  height: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & span {
    font-size: 16px;
    color: white;
    font-weight: bold;
    white-space: nowrap;
    text-align: center;
    overflow: hidden;
    cursor: pointer;
    transition: .5s;
  }

  & span:hover{
    color: var(--color-text-special);
  }

  @media only screen and (max-width: 1245px){
    & span { 
      font-size: 16px;
    }
  }
`;

export const ArtistTracks = styled.div`
  width: calc(100% - 15px - 350px);
  height: 100%;
  margin-left: 15px;
  padding: 20px;
  background-color: var(--color-special-background);

  @media only screen and (max-width: 1245px){
    & { 
      width: calc(100% - 15px - 220px);
    }
  }

  @media only screen and (max-width: 1108px){
    & { 
      margin-left: 0px;
      height: 50%;
      position: relative;
      top: -15px;
      width: 100%;
    }
  }

  @media only screen and (max-width: 425px){
    & { 
      display: none;
    }
  }
`;

export const TrackList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: var(--color-special-background);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-text-special);
  }
`;