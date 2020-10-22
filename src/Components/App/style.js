import styled from "styled-components"

const S = {}

S.AppContainer = styled.div`
    position: relative;
    display: flex;
`

S.EmptySpace = styled.div`
    width: 25%;
    @media only screen and (max-width: 1300px) {
        width: 30%;
    }
    @media only screen and (max-width: 1040px) {
        display: none;
    }
`

S.Footer = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 100px;
    background-color: black;
    @media only screen and (max-width: 1040px) {
        display: block;
    }
`

export default S