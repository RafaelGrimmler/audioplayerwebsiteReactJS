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
  align-items: center;
  overflow-y: scroll;
  
  @media only screen and (max-width: 768px){
    & {
      margin-left: 0px;
      width: 100vw;
    }
  }
`;
