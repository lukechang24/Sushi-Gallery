import styled from "styled-components"
import background from "./images/background2.jpg"
const S = {}

S.Container1 = styled.div`
    width: 75%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 1040px) {
        width: 100%;
    }
    background-image: url(${background});
    background-size: 200px;
    background-repeat: repeat;
`

S.TabContainer = styled.div`
    display: flex;
    margin-top: 10px;
    @media only screen and (max-width: 1040px) {
        display: none;
    }
`

S.Tab = styled.button`
    margin: 0 5px;
    padding: 5px;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    &.active {
        background-color: black;
        color: white;
    }
`

S.TitleDiv = styled.div`
    width: 55%;
    background-color: antiquewhite;
    margin-top: 25px;
    padding: 0 50px;
    @media only screen and (max-width: 1040px) {
        width: 65%;
        padding: 0 3%;        
        margin-top: 25px;
    }
`

S.Title = styled.h2`
    text-align: center;
    margin-top: 25px;
    padding: 10px 0 0;
    background-color: white;
    @media only screen and (max-width: 1040px) {
        padding: 0;
        margin-top: 10px;
        font-size: 20px;
    }
`

S.Message = styled.small`
    font-style: italic;
    margin: 5px;
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

export default S