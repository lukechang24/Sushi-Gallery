import styled from "styled-components"
import background from "../Menu/images/background5.jpg"
import oki from "../Menu/images/oki.jpg"

const S = {}

S.Container1 = styled.div`
    position: relative;
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white url(${background});
    background-size: 400px;
    background-repeat: repeat;
    min-height: 100vh;
    z-index: 1;
    @media only screen and (max-width: 1300px) {
        width: 70%;
    }
    @media only screen and (max-width: 1040px) {
        width: 100%;
        margin-top: 25px;
    }
`

S.Container2 = styled.div`
    width: 80%;
    min-height: 75%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    background-color: white;
    border: 3px solid black;
    border-radius: 25px;
    z-index: 2;
    @media only screen and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
`

S.TextContainer = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto 0;
    @media only screen and (max-width: 700px) {
        width: 80%;
    }
    @media only screen and (max-width: 400px) {
        width: 90%;
    }
`

S.Title = styled.h1`
    margin: 5px;
    font-size: 40px;
    font-family: 'Mansalva',cursive;
`

S.About = styled.p`
    line-height: 3;
    text-align: center;
    @media only screen and (max-width: 1300px) {
        font-size: 15px;
    }
    @media only screen and (max-width: 1040px) {
        font-size: 13px;
    }
    @media only screen and (max-width: 700px) {
        /* font-size: 10px; */
        line-height: 1.75;
    }
`

S.Picture = styled.img`
    width: 35%;
    margin: auto 0;
    @media only screen and (max-width: 700px) {
        width: 50%;
        margin: 25px 0 30px;
    }
    @media only screen and (max-width: 400px) {
        width: 50%;
        margin-bottom: 10px;
    }
`

S.Overlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.7;
    z-index: 0;
`

export default S