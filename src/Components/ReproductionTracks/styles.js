import styled from 'styled-components';

export const Container = styled.div`
    width: 86%;
    margin-top: 70px;
    margin-left: 7%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    overflow-x: hidden;
    transition: 0.5s;
    background-color: var(--color-special-background);
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const Title = styled.h2`
    color: white;
    width: 100%;
    font-size: 36px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--color-general-background);
`;

export const NoSongsContainer = styled.div`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;

    & span {
        color: white;
    }
`;
