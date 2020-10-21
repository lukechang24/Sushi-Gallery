import styled from "styled-components"

const S = {}

S.TitleContainer = styled.div`
    position: fixed;
    display: none;
    justify-content: center;
    width: 100%;
    background-color: #0C1821;
    z-index: 500;
    @media only screen and (max-width: 1040px) {
        display: flex;
    }
`

S.Title = styled.h1`
    font-family: "Brownies";
    color: white;
    letter-spacing: 2px;
    margin: 5px 0 7.5px;
`

S.Hamburger = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    margin-left: 2.5%;
    height: 45px;
    width: 45px;
    z-index: 3;
    background-color: #0C1821;
    &.active {
        & :nth-child(1) {
            transform: translate(0, 8px) rotate(45deg);
        }
        & :nth-child(2) {
            transform: translate(-5px, 0);
            opacity: 0;
        }
        & :nth-child(3) {
            transform: translate(0, -8px) rotate(-45deg);
        }
    }
    @media only screen and (max-width: 1040px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

S.Line = styled.div`
    width: 25px;
    height: 4px;
    margin: 2px;
    border-radius: 5px;
    background-color: white;
    transition: all 0.25s;
`

S.Container1 = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
`

export default S