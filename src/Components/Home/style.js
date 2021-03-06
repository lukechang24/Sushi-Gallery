import styled from "styled-components"

const S = {}

S.Container1 = styled.div`
    position: relative;
    width: calc(100vw - 400px);
    height: 100vh;
    @media only screen and (max-width: 1300px) {
        width: calc(100vw - 350px);
    }
    @media only screen and (max-width: 1040px) {
        width: 100%;
    }
`

S.Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: ${props => props.opacity ? props.opacity : 0.9};
    transition: opacity 1.5s ease-in-out;
`

export default S