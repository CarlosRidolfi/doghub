import styled from 'styled-components'

export const CardTitle = styled.h2`
    padding: 20px 0px 20px 10px;
    font-family: 'Raleway';
    font-weight: bold;
    color: #6d6868;
    font-size: 30px;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 5px;
    row-gap: 5px;
    padding-bottom: 10px;
`

export const CardButton = styled.button`
    border: 1px solid #838282;
    max-width: 100px;
    border-radius: 5px;
    text-align: center;
    padding: 5px;
    background: none;
    color: #838282;
`

export const DogDetailsList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    font-family: 'Raleway';
    color: #838282;
    font-weight: 600;
    padding: 10px;
`

export const AdoptButton = styled.button`
    width: 100%;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    padding: 20px;
    font-family: 'Raleway';
    font-weight: 900;
    color: white;
    background-color: #838282;
    margin-top: 20px;
    cursor: pointer;
`

export const CardContainer = styled.div`
    width: 350px;
    @media screen and (max-width: 380px) {
        width: 300px;
    }

    @media screen and (max-width: 300px) {
        width: 270px;
    }
`