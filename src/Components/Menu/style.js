import styled from "styled-components"
import background from "./images/wood2.jpg"
import chain from "./images/chain1.png"

const S = {}

S.Container1 = styled.div`
    position: relative;
    width: 75%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white url(${background});
    background-size: 100%;
    background-repeat: repeat;
    z-index: 1;
    @media only screen and (max-width: 1300px) {
        width: 70%;
    }
    @media only screen and (max-width: 1040px) {
        width: 100%;
        /* background-size: 350px; */
    }
    @media only screen and (max-width: 400px) {
        /* background-size: 300px; */
    }
`

S.TabContainer = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    margin-top: 5px;
    z-index: 5;
    transition: all 0.25s ease-in;
    @media only screen and (max-width: 1040px) {
        display: none;
    }
`

S.Sign = styled.div`
    font-family: 'Montserrat', sans-serif;
    position: relative;
    display: flex;
    letter-spacing: 1.5px;
    margin: 10px 5px;
    transition: all 0.25s ease-in-out;
    &.active {
        transform: translate(0, 7.5px);
    }
    &:hover {
        transform: translate(0, 7.5px);
        cursor: pointer;
    }
`

S.Tab = styled.div`
    position: relative;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to bottom right, hsl(206, 47%, 10%), hsl(206, 47%, 20%));
    border-radius: 5px;
    box-shadow: 5px 5px 10px black;
`

S.Chain = styled.div`
    position: absolute;
    left: ${props => props.left ? "15%" : "unset"};
    right: ${props => props.left ? "unset" : "15%"};
    bottom: 35px;
    width: 5px;
    height: 50px;
    background-image: url(${chain});
    background-size: 100%;
`

S.TabName = styled.h3`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 12px;
    color: #F0EFEF;
    padding: 0 7.5px;
`

S.TitleDiv = styled.div`
    width: 600px;
    background-image: ${props => props.color === "true" ? "linear-gradient(to right, hsl(36, 100%, 90%), hsl(45, 100%, 85%))" : null};
    /* color: #444444; */
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-top: 75px;
    padding: 0 25px;
    box-shadow: ${props => props.color === "true" ? "12.5px 10px 10px rgb(44,43,47), -12.5px 10px 10px rgb(44,43,47)" : "none"};
    z-index: -1;
    @media only screen and (max-width: 1040px) {
        position: relative;
        top: 25px;
        width: 60%;
        padding: 0 3%;        
        margin-top: 75px;
    }
    @media only screen and (max-width: 700px) {
        width: 80%;
    }
    &.hide {
        background-image: none;
    }
`

S.Title = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    text-align: center;
    padding: 10px 0 0;
    margin: 5px 0 5px;
    @media only screen and (max-width: 1040px) {
        padding: 0;
        margin: 15px 0 5px;
        font-size: 35px;
    }
    @media only screen and (max-width: 700px) {
        font-size: 25px;
    }
    display: ${props => props.tab === "Rolls" ? "none" : "block"};
`

S.DotDiv = styled.div`
    display: none;
    position: absolute;
    top: 75px;
    justify-content: center;
    @media only screen and (max-width: 1040px) {
        display: flex;
    }
`

S.Dot = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 25px;
    background-color: white;
    margin: 0 3px;
    cursor: pointer;
    &.black {
        background-color: black;
    }
`

S.ArrowDiv = styled.div`
    position: fixed;
    left: ${props => props.left ? props.left : null};
    right: ${props => props.right ? props.right : null};
    top: 50%;
    width: 50px;
    z-index: 5;
    display: none;
    @media only screen and (max-width: 1040px) {
        display: flex;
        justify-content: center;
    }
`

S.ArrowName = styled.p`
    width: 100px;
    font-size: 15px;
`

S.LeftArrow = styled.i`
    font-size: 40px;
    color: white;
`

S.RightArrow = styled.i`
    font-size: 40px;
    color: white;
`

S.Spinner = styled.i`
    font-size: 50px;
    margin-top: calc(100vh / 2 - 150px);
    @media only screen and (max-width: 1040px) {
        margin-top: calc(100vh / 2 - 75px);
    }
`

S.Overlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.15;
    z-index: -2;
`

S.Message = styled.h3`
    font-family: 'Piazzolla', serif;
    position: fixed;
    top: 50%;
    font-size: 50px;
    font-weight: light;
    color: white;
    margin: 0 auto;
    opacity: 1;
    z-index: 10;
    transition: opacity 2.5s ease;
    display: none;
    @media only screen and (max-width: 700px) {
        display: inline-block;
        font-size: 30px;
    }
    @media only screen and (max-width: 400px) {
        font-size: 20px;
    }
`

export default S