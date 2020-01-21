import styled from "styled-components"

const S = {}

S.Container1 = styled.div`
    position: relative;
    width: 75%;
    height: 100vh;
    @media only screen and (max-width: 1040px) {
        width: 100%;
    }
`

S.Background = styled.div`
    position: absolute;
    width: 100%;
    height: 80%;
    background-image: url(${props => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: ${props => props.opacity ? props.opacity : 1};
    transition: opacity 1.5s ease-in-out;
`

export default S