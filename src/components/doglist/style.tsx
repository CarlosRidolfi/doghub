import styled from 'styled-components';

export const DogListTitle = styled.h1`
    font-size: 30px;
    font-weight: bold;
    font-family: 'Raleway';
    margin-top: 30px;
    margin-bottom: 30px;
    color: #464545;
`

export const DogListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 10px;

    a {
        text-decoration: none;
    }
`

export const DogListContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
