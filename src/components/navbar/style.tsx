import styled from 'styled-components'

export const NavbarWrapper = styled.div`
    padding: 20px;
    background-color: #9b9b9b;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: -2px 10px 15px -10px rgba(0,0,0,0.63);
    -moz-box-shadow: -2px 10px 15px -10px rgba(0,0,0,0.63);
    box-shadow: -2px 10px 15px -10px rgba(0,0,0,0.63);
`

export const Title = styled.h1`
    font-family: 'Raleway';
    font-size: 32px;
    color: white;
    background-color: #9b9b9b;
    font-weight: 300;
    text-align: center;
    flex: 1;

    span {
        font-weight: bold;
        background-color: #9b9b9b;
    }
`

export const CartButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    position: relative;

    a {
        text-decoration: none;
    }
`

export const BackButton = styled(CartButton)`
    
` 

export const CartCounter = styled.div`
    border-radius: 10px;
    width: 20px;
    height: 20px;
    background-color: red;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-left: 25px;
    margin-top: -5px;
`

export const Gutter = styled.div`
    width: 50px;
`