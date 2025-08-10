import styled, { keyframes } from "styled-components"
import { Mouse } from "@styled-icons/entypo/Mouse"
import { TouchApp } from "@styled-icons/material/TouchApp"


const S = {}

const fadeIn = keyframes`
    0% {
        opacity: 0
    }
    100% {
        opacity: 1;
    }
`

S.Container1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

S.SubCategory = styled.h3`
    height: 55px;
    font-family: 'Montserrat', sans-serif;
    font-size: ${props => props.isRoll === "true" ? "40px" : "30px"};
    font-weight: lighter;
    color: white;
    border-bottom: 3.5px solid white;
    margin: 25px 0;
    @media only screen and (max-width: 700px) {
        height: 35px;
        font-size: 25px;
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
    @media only screen and (max-width: 700px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 150px));
        grid-column-gap: 25px;
    }
`

S.Roll = styled.div`
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    position: relative;
    /* width: 100%; */
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: black;
    border: 3px solid #0C1821;
    border-bottom: none;
    &.show :nth-child(3) {
        visibility: visible;
        flex-direction: column;
        opacity: 0.9;
    }
    @media only screen and (max-width: 700px) {
        height: 125px;
    }
`
S.RollImg = styled.img`
    height: 80%;
    opacity: 0.85;
    filter: brightness(1.3);
`

S.RollName = styled.h3`
    height: 20%;
    display:flex;
    align-items: center;
    justify-content: center;
    background: black linear-gradient(to right, hsl(206, 47%, 10%), hsl(206, 47%, 25%), hsl(206, 47%, 10%));
    color: rgba(255,255,255);
    text-align: center;
    @media only screen and (max-width: 700px) {
        font-size: 10px;
    }
    @media only screen and (max-width: 400px) {
        font-size: 9px;
        letter-spacing: -1px;
    }
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
    font-family: 'Prompt', sans-serif;
    color: black;
    padding-left: 5px;
    margin: 0 0 5px;
    @media only screen and (max-width: 700px) {
        font-size: 12px;
    }
    @media only screen and (max-width: 700px) {
        letter-spacing: -1px;
    }
`

S.Info = styled.p`
    color: #0C1821;
    padding: 0 5px;
    @media only screen and (max-width: 700px) {
        font-size: 10px;
    }
`

S.Price = styled.p`
    position: absolute;
    right: 5px;
    top: 7px;
    font-size: 20px;
    @media only screen and (max-width: 700px) {
        top: 3.5px;
        font-size: 10px;
    }
`
S.Message1 = styled.span`
    width: 100%;
    font-family: 'Piazzolla', serif;
    font-size: 20px;
    color: white;
    font-style: italic;
    text-align: center;
    margin-bottom: 25px;
    @media only screen and (max-width: 700px) {
        display: none;
        font-size: 12.5px;
    }
`

S.Message2 = styled.span`
    width: 100%;
    font-family: 'Piazzolla', serif;
    font-size: 20px;
    color: white;
    font-style: italic;
    text-align: center;
    margin-bottom: 15px;
    display: none;
    @media only screen and (max-width: 700px) {
        display: inline;
        font-size: 12.5px;
    }
`

S.MouseIcon = styled(Mouse)`
    width: 20px;
    color: white;
    margin-right: 5px;
    margin-bottom: 5px;
`

S.TouchIcon = styled(TouchApp)`
    width: 15px;
    color: white;
    margin-right: 5px;
    margin-bottom: 5px;
`

S.Bold = styled.span`
    color: hsl(0, 100%, 30%);
    font-weight: bolder;
`


export default S