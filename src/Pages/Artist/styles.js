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
`;

export const TracksContainer = styled.div`
  width: calc(100% - 150px - 500px);
  height: calc(100% - 80px);
  margin-right: 120px;
`;
