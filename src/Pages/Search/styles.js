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
  width: calc(100% - 150px - 32%);
  height: calc(100% - 80px);
  background-color: var(--color-special-background);
  margin-top: 40px;
  margin-bottom: 40px;
  margin-right: 50px;
  margin-left: 10px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;

  @media only screen and (max-width: 416px){
      & {
        padding-left: 7px;
        padding-right: 7px;
      }
  }

  @media only screen and (max-width: 1333px){
    & {
      width: calc(100% - 150px - 42%);
    }
  }

  @media only screen and (max-width: 1200px){
    & {
      width: calc(100% - 100px);
      margin-left: 50px;
    }
  }

  @media only screen and (max-width: 560px){
    & {
      width: calc(100% - 20px);
      margin-right: 10px;
      margin-left: 10px;
      margin-top: 15px;
    }
  }
`;

export const ReproductionContainer = styled.div`
  width: calc(32%);
  height: calc(100% - 80px);
  background-color: var(--color-special-background);
  margin-top: 40px;
  margin-bottom: 40px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: 10px;

  @media only screen and (max-width: 1333px){
      & {
        width: calc(42%);
      }
  }

  @media only screen and (max-width: 1200px){
      & {
        display: none;
      }
  }
`;

export const Title = styled.h2`
    color: white;
    width: 100%;
    height: 45px;
    font-size: 26px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--color-general-background);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media only screen and (max-width: 768px){
        & {
          font-size: 22px;
        }
    }

    & span {
      font-size: 20px;
      font-style: italic;

      @media only screen and (max-width: 768px){
        & {
          font-size: 17px;
        }
      }
    }
`;

export const TracksContainer = styled.ul`
  width: 100%;
  height: calc(100% - 85px);
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
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

export const NothingContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    font-size: 30px;
    color: white;
    text-align: center;
  }
`;