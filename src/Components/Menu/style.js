import styled from "styled-components"

const S = {}

S.Container1 = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

S.TabContainer = styled.div`
    display: flex;
`

S.Tab = styled.button`

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