import styled from "styled-components"
import background from "./images/background5.jpg"
import chain from "./images/chain.png"

const S = {}

S.Container1 = styled.div`
    position: relative;
    width: 75%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white url(${background});
    background-size: 400px;
    background-repeat: repeat;
    z-index: 1;
    @media only screen and (max-width: 1040px) {
        width: 100%;
        background-size: 350px;
    }
    @media only screen and (max-width: 375px) {
        background-size: 300px;
    }
`

S.TabContainer = styled.div`
    display: flex;
    margin-top: 5px;
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
    }
`

S.Tab = styled.div`
    position: relative;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0C1821;
    background-image: linear-gradient(to bottom right, hsl(206, 47%, 10%), hsl(206, 47%, 20%));
    border-radius: 5px;
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
    font-size: 12px;
    color: #F0EFEF;
    padding: 0 7.5px;
`

S.TitleDiv = styled.div`
    width: 55%;
    background-image: ${props => props.color ? "linear-gradient(to right, hsl(36, 100%, 94%), hsl(50, 100%, 94%))" : null};
    color: #444444;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-top: 50px;
    padding: 0 25px;
    @media only screen and (max-width: 1040px) {
        width: 65%;
        padding: 0 3%;        
        margin-top: 25px;
    }
    &.hide {
        background-image: none;
    }
`

S.Title = styled.h2`
    font-family: 'Mansalva', cursive;
    font-size: 40px;
    text-align: center;
    padding: 10px 0 0;
    margin: 5px 0 5px;
    @media only screen and (max-width: 1040px) {
        padding: 0;
        margin: 15px 0 5px;
        font-size: 20px;
    }
`

S.Message = styled.small`
    font-family: 'Work Sans', sans-serif;
    font-style: italic;
    color: #565656;
    margin: 10px 0;
`

S.ArrowDiv = styled.div`
    position: fixed;
    left: ${props => props.left ? props.left : null};
    right: ${props => props.right ? props.right : null};
    top: calc(100vh / 2);
    display: none;
    @media only screen and (max-width: 1040px) {
        display: flex;
        flex-direction: column;
    }
`

S.ArrowName = styled.p`
    width: 100px;
    font-size: 15px;
`

S.LeftArrow = styled.i`
    font-size: 40px;
    color: black;
`

S.RightArrow = styled.i`
    font-size: 40px;
    color: black;
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
    opacity: 0.75;
    z-index: -2;
`

export default S