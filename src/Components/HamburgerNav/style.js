import styled from "styled-components"

const S = {}

S.Hamburger = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    margin-left: 25px;
    height: 45px;
    width: 45px;
    z-index: 3;
    background-color: black;
    &.active {
        & :nth-child(1) {
            /* position: relative;
            top: 7.5px; */
            transform: translate(0, 7.5px) rotate(45deg);
        }
        & :nth-child(2) {
            transform: translate(-5px, 0);
            opacity: 0;
        }
        & :nth-child(3) {
            /* position: relative;
            bottom: 7.5px; */
            transform: translate(0, -7.5px) rotate(-45deg);
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