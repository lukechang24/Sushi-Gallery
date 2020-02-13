import styled from "styled-components"

const S = {}

S.Container1 = styled.div`
    width: 55%;
    background: linear-gradient(to right, hsl(36, 100%, 94%), hsl(50, 100%, 94%));
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 0 25px 25px;
    margin-bottom: 50px;
    @media only screen and (max-width: 1040px) {
        width: 65%;
        padding: 0 3% 15px;
    }
`

S.Container2 = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    background-color: white;
    @media only screen and (max-width: 1040px) {
        width: 100%;
    }
`

S.List = styled.ul`
    width: 80%;
    display: flex;
    flex-direction: column;
    list-style: none;
    @media only screen and (max-width: 1040px) {
        width: 90%;
    }
`

S.Item = styled.li`
    font-family: 'Quicksand', sans-serif;
    display: flex;
    justify-content: space-between;
    color: #444444;
    font-size: 20px;
    margin: 20px 0;
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
    margin-left: 10px;
`

S.Message = styled.span`
    width: 100%;
    color: #565656;
    font-style: italic;
    text-align: center;
    margin-top: 25px;
`


export default S