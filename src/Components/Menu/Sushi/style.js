import styled from "styled-components"

const S = {}

S.Container1 = styled.div`
    width: 600px;
    background: linear-gradient(to right, hsl(36, 100%, 90%), hsl(45, 100%, 85%));
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 0 25px 25px;
    margin-bottom: 50px;
    @media only screen and (max-width: 1040px) {
        width: 60%;
        padding: 0 3% 15px;
    }
    @media only screen and (max-width: 650px) {
        width: 80%;
    }
`

S.Container2 = styled.div`
    width: 90%;
    min-height: 85vh;
    display: flex;
    justify-content: center;
    background-color: white;
    @media only screen and (max-width: 1040px) {
        width: 100%;
    }
    font-family: 'Mansalva', sans-serif;
`

S.List = styled.ul`
    width: 80%;
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-top: 10px;
    @media only screen and (max-width: 1040px) {
        width: 90%;
    }
`

S.SubCatergory = styled.h3`
    text-align: center;
    font-size: 25px;
    font-weight: lighter;
    text-decoration: underline;
    margin-top: 25px;
`

S.Item = styled.li`
    /* font-family: 'Mansalva', sans-serif; */
    display: flex;
    justify-content: space-between;
    color: #444444;
    font-size: 20px;
    font-weight: lighter;
    margin: 20px 0;
    @media only screen and (max-width: 1040px) {
        margin: 15px 0;
    }
    @media only screen and (max-width: 650px) {
        font-size: 15px;
    }
`

S.Name = styled.p`
    @media only screen and (max-width: 1040px) {
        font-weight: 500;
        padding-right: 10px;
    }
`

S.Price = styled.p`
    margin: ${props => props.margin ? props.margin : 0};
`

S.PriceDiv = styled.div`
    display: flex;
    flex-direction: column;
`

S.Message = styled.span`
    font-family: 'Piazzolla', serif;
    width: 100%;
    font-size: 20px;
    color: #565656;
    font-style: italic;
    text-align: center;
    margin-top: 25px;
`


export default S