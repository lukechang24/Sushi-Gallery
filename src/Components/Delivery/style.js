import styled from "styled-components"
import background from "../Menu/images/background5.jpg"


const S = {}

S.Container1 = styled.div`
    position: relative;
    background: white url(${background});
    background-size: 400px;
    background-repeat: repeat;
    width: 75%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    @media only screen and (max-width: 1040px) {
        width: 100%;
    }
`

S.DeliveryContainer = styled.div`
    font-family: 'Cairo', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

S.DeliveryHeading = styled.h1`
    /* width: 80%; */
    font-size: 30px;
    text-align: center;
    margin: 0 0 25px;
    @media only screen and (max-width: 700px) {
        font-size: 25px;
    }
`

S.DeliveryLink = styled.a`

`

S.DeliveryImage = styled.img`
    width: 250px;
    border: 2px solid transparent;
    :hover {
        width: 260px;
        border: none;
    }
`

S.Green = styled.span`
    color: #5CB109;
`

S.Overlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.7;
    z-index: -1;
`

export default S