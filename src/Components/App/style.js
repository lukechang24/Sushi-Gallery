import styled from "styled-components"

const S = {}

S.AppContainer = styled.div`
    display: flex;
`
S.EmptySpace = styled.div`
    width: 25%;
    @media only screen and (max-width: 1040px) {
        display: none;
    }
`

S.Hamburger = styled.div`
    display: none;
    position: fixed;
    top: 0;
    margin-left: 25px;
    height: 50px;
    width: 50px;
    z-index: 3;
    background-color: black;
    @media only screen and (max-width: 1040px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

S.Line = styled.div`
    width: 30px;
    height: 5px;
    margin: 2px;
    border-radius: 5px;
    background-color: white;

`

export default S