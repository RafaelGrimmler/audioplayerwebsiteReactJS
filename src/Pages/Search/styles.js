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
  justify-content: center;
  
  @media only screen and (max-width: 768px){
    & {
      margin-left: 0px;
      width: 100vw;
    }
  }
`;

export const ResultContainer = styled.div`
  width: 900px;
  height: 700px;
  background-color: var(--color-special-background);
  margin-top: 40px;
  margin-right: 50px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const ReproductionContainer = styled.div`
  width: 400px;
  height: 700px;
  background-color: var(--color-special-background);
  margin-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Title = styled.h2`
    color: white;
    width: 100%;
    font-size: 26px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--color-general-background);

    & span {
      font-size: 20px;
      font-style: italic;
    }
`;

export const TracksContainer = styled.ul`
  width: 100%;
  height: 605px;
  display: grid;
  grid-row-gap: 10px;
  margin-top: 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: var(--color-special-background);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-text-special);
  }
`;



