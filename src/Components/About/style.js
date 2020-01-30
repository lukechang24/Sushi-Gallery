import styled from "styled-components"

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
`

S.Title = styled.h1`
    margin-top: 50px;
`

S.About = styled.p`
    
`

export default S