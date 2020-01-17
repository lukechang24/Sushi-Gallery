import styled from "styled-components"

const S = {}

S.Container1 = styled.div`
    width: 60%;
    background-color: antiquewhite;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    @media only screen and (max-width: 992px) {
        padding: 10px;
    }
`

S.Container2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: white;
`

S.List = styled.ul`
    width: 80%;
    list-style: none;
`

S.Item = styled.li`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    font-size: 20px;
    @media only screen and (max-width: 992px) {
        font-size: 15px;
    }
`

S.Name = styled.p`
    @media only screen and (max-width: 992px) {
        font-weight: 500;
    }
`

S.Price = styled.p`

`

export default S