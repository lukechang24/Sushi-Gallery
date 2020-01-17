import styled from "styled-components"

const S = {}

S.Container1 = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 992px) {
        width: 100%;
    }
`

S.TabContainer = styled.div`
    display: flex;
    margin-top: 10px;
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

S.Title = styled.h2`
    text-align: center;
    margin: 50px 0 15px;
`

S.Message = styled.small`
    font-style: italic;
    margin: 5px;
`

export default S