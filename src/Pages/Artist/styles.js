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
  justify-content: space-between;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: var(--color-special-background);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-text-special);
  }

  @media only screen and (max-width: 1245px){
    & { 
      flex-direction: column;
    }
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

export const ArtistInformationsContainer = styled.div`
  width: 350px;
  height: calc(100% - 80px);
  margin-left: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1245px){
    & { 
      width: 200px;
      margin-left: 0px;
      margin-top: 50px;
      margin-bottom: 20px;
    }
  }

  @media only screen and (max-width: 768px){
    & { 
      width: 150px;
      margin-top: 20px;
      margin-bottom: 0px;
    }
  }
`;

export const ArtistImageContainer = styled.div`
  width: 90%;
  height: 400px;
  border-radius: 40px;
  position: relative;

  @media only screen and (max-width: 1245px){
    & { 
      height: 250px;
    }
  }

  @media only screen and (max-width: 768px){
    & { 
      height: 150px;
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
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    font-size: 22px;
    color: white;
    font-weight: bold;
    white-space: nowrap;
    text-align: center;
    overflow: hidden;
  }

  @media only screen and (max-width: 1245px){
    & span { 
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 768px){
    & span { 
      font-size: 14px;
    }

    & {
      margin-top: 0px;
    }
  }
`;

export const TracksContainer = styled.div`
  width: calc(100% - 150px - 500px);
  height: calc(100% - 80px);
  margin-right: 120px;
  background-color: var(--color-special-background);
  padding: 20px;

  @media only screen and (max-width: 1245px){
    & { 
      width: calc(100% - 120px);
      margin-right: 0px;
      margin-bottom: 120px;
    }
  }

  @media only screen and (max-width: 768px){
    & { 
      height: 400px;
    }
  }

  @media only screen and (max-width: 514px){
    & { 
      width: calc(100% - 10px);
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