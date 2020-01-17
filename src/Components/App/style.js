import styled from "styled-components"

const S = {}

S.AppContainer = styled.div`
    display: flex;
`
S.EmptySpace = styled.div`
    width: 25%;
    @media only screen and (max-width: 992px) {
        display: none;
    }
`

export default S