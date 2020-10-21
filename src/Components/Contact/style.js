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

S.Container2 = styled.div`
    display: flex;
    justify-content: space-between;
    /* background-color: black; */
    padding: 75px;
`

S.PhoneContainer = styled.div`
    display: flex;
    flex-direction: column;
`

S.PhoneHeading = styled.h1`
    text-align: center;
`

S.PhoneNumber = styled.a`
    font-size: 50px;
`

S.DeliveryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

S.DeliveryHeading = styled.h1`
    text-align: center;
`

S.DeliveryLink = styled.a`
    
`

S.DeliveryImage = styled.img`
    width: 250px;
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