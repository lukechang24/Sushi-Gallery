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
    /* background-image: url(https://graphicriver.img.customer.envatousercontent.com/files/256060429/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=3c24cdb3e687c0c91b03ceed7009aa91);
    background-size: 100%; */
    /* background-repeat: no-repeat; */
`

S.TabContainer = styled.div`
    display: flex;
    margin-top: 10px;
    @media only screen and (max-width: 1040px) {
        display: none;
    }
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

S.TitleDiv = styled.div`
    width: 55%;
    background-color: antiquewhite;
    margin-top: 25px;
    padding: 0 50px;
    @media only screen and (max-width: 1040px) {
        padding: 0 10px;
        margin-top: 10px;
    }
`

S.Title = styled.h2`
    text-align: center;
    margin-top: 25px;
    padding: 10px 0 0;
    background-color: white;
    @media only screen and (max-width: 1040px) {
        padding: 0;
        margin-top: 10px;
        font-size: 20px;
    }
`

S.Message = styled.small`
    font-style: italic;
    margin: 5px;
`

S.ArrowDiv = styled.div`
    position: fixed;
    left: ${props => props.left ? props.left : null};
    right: ${props => props.right ? props.right : null};
    top: calc(100vh / 2);
    display: none;
    @media only screen and (max-width: 1040px) {
        display: flex;
        flex-direction: column;
    }
`

S.ArrowName = styled.p`
    width: 100px;
    font-size: 15px;
`

S.LeftArrow = styled.i`
    font-size: 40px;
    color: black;
`

S.RightArrow = styled.i`
    font-size: 40px;
    color: black;
`

S.Spinner = styled.i`
    font-size: 50px;
    margin-top: calc(100vh / 2 - 150px);
    @media only screen and (max-width: 1040px) {
        margin-top: calc(100vh / 2 - 75px);
    }
`
export default S