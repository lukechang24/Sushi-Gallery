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

S.Container1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

S.SubCatergory = styled.h3`
    height: 55px;
    font-family: 'Mansalva', sans-serif;
    font-size: ${props => props.isRoll === "true" ? "40px" : "30px"};
    font-weight: lighter;
    border-bottom: 3.5px solid black;
    margin: 25px 0 50px;
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
    font-family: 'Cairo', sans-serif;
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
    @media only screen and (max-width: 700px) {
        font-size: 10px;
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

S.Bold = styled.span`
    color: hsl(0, 100%, 30%);
    font-weight: bolder;
`

export default S