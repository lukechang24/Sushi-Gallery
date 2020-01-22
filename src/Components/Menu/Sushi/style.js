import styled from "styled-components"

const S = {}

S.Container1 = styled.div`
    width: 55%;
    background-color: antiquewhite;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 50px 25px;
    margin-bottom: 50px;
    @media only screen and (max-width: 1040px) {
        padding: 0 10px 10px;
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
    @media only screen and (max-width: 1040px) {
        font-size: 15px;
        margin: 15px 0;
    }
`

S.Name = styled.p`
    @media only screen and (max-width: 1040px) {
        font-weight: 500;
    }
`

S.Price = styled.p`

`


export default S