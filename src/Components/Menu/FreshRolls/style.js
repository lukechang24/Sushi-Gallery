import styled, { keyframes } from "styled-components"

const S = {}

const fadeIn = keyframes`
    0% {
        opacity: 0
    }
    100% {
        opacity: 1;
    }
`

S.RollContainer = styled.div`
    animation: 0.5s ${fadeIn} ease-out;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(275px, 275px));
    justify-content: center;
    grid-column-gap: 50px;
    grid-row-gap: 50px;
    margin: 0px 25px 25px;
    margin-bottom: 25px;
`

S.Roll = styled.div`
    box-sizing: border-box;
    font-family: 'Cairo', sans-serif;
    position: relative;
    width: 275px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: lightgray;
    border: 3px solid #0C1821;
    border-bottom: none;
    &.show :nth-child(3) {
        visibility: visible;
        flex-direction: column;
        opacity: 0.9;
    }
`
S.RollImg = styled.img`
    height: 80%;
    opacity: 0.75;
`

S.RollName = styled.h3`
    height: 20%;
    display:flex;
    align-items: center;
    justify-content: center;
    background: black linear-gradient(to right, hsl(206, 47%, 10%), hsl(206, 47%, 25%), hsl(206, 47%, 10%));
    color: rgba(255,255,255);
`

S.InfoContainer = styled.div`
    font-family: 'Work Sans', sans-serif;
    visibility: hidden;
    width: 100%;
    height: 80%;
    position: absolute;
    background-color: white;
    opacity: 0;
    transition: visibility 0s, opacity 0.2s linear;
`

S.InfoTitle = styled.h2`
    color: black;
    padding-left: 5px;
    margin: 5px 0;
`

S.Info = styled.p`
    color: #0C1821;
    padding: 0 5px;
`

S.Price = styled.p`
    position: absolute;
    right: 5px;
    top: 6px;
    font-size: 21px;
`

S.Bold = styled.span`
    color: hsl(0, 100%, 30%);
    font-weight: bolder;
`

export default S