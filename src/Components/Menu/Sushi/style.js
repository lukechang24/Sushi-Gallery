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
    box-shadow: 12.5px 12.5px 10px rgb(44,43,47), -12.5px 12.5px 10px rgb(44,43,47);
    @media only screen and (max-width: 1040px) {
        width: 60%;
        padding: 0 3% 15px;
    }
    @media only screen and (max-width: 650px) {
        width: 80%;
    }
`

S.Container2 = styled.div`
    font-family: 'Mansalva', sans-serif;
    width: 90%;
    min-height: 85vh;
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 0 0 30px;
    @media only screen and (max-width: 1040px) {
        width: 100%;
    }
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
    font-size: 30px;
    font-weight: lighter;
    text-decoration: underline;
    margin-top: 50px;
`

S.Item = styled.li`
    width: ${props => props.isBento === "true" ? "100%" : props.half === "true" ? "50%" : "auto"};
    font-family: 'Piazzolla', serif;
    display: flex;
    justify-content: ${props => props.isBento === "true" ? "start" : props.half === "true" ? "center" : "space-between"};
    color: #444444;
    font-size: 20px;
    margin: ${props => props.half === "true" ? "none" : "30px 0 0"};
    @media only screen and (max-width: 1040px) {
        margin: ${props => props.half === "true" ? "none" : "15px 0 0"};
    }
    @media only screen and (max-width: 650px) {
        font-size: 15px;
    }
`
S.ItemDescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`

S.Description = styled.p`
    font-family: 'Piazzolla', serif;
    padding-right: 15%;
    @media only screen and (max-width: 650px) {
        font-size: 15px;
    }
`

S.Name = styled.p`
    font-weight: 600;
    text-align: ${props => props.isBento === "true" ? "center" : "left"};
    margin: ${props => props.isBento ? "0 25px" : "none"};
    @media only screen and (max-width: 1040px) {
        padding-right: 10px;
        margin-left: ${props => props.isBento ? "10px" : "none"};
    }
`

S.Price = styled.p`
    font-family: 'Piazzolla', serif;
    text-align: center;
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
    margin: 15px 0;
    @media only screen and (max-width: 650px) {
        font-size: 12.5px;
    }
    
`


export default S