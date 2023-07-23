import styled from 'styled-components';

export const AdoptCardWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    column-gap: 30px;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    background-color: #e7e1e1;
    width: 100%;
    max-width: 350px;
    position: relative;

    @media screen and (max-width: 375px){
        max-width: 280px;
    }

    img {
        border-radius: 15px;
    }
`

export const AdoptCardTitle = styled.h3`
    font-family: 'Raleway';
    font-weight: bold;
    color: #6d6868;
    font-size: 18px;
    display: flex;
    flex-wrap: wrap;
    width: 200px;
`

export const AdoptList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    row-gap: 30px;
    flex-direction: column;
    margin-top: 10px;
`

export const DeleteButton = styled.button`
    border: none;
    background: none;
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    cursor: pointer;
`
