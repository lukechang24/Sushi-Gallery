import styled from "styled-components"

const S = {}

S.RollContainer = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(275px, 275px));
    justify-content: center;
    grid-column-gap: 50px;
    grid-row-gap: 25px;
    margin: 0px 25px 25px;
    margin-bottom: 25px;
`

S.Roll = styled.div`
    position: relative;
    width: 275px;
    height: 200px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1.5px solid black;
    &.show :nth-child(3) {
        visibility: visible;
        flex-direction: column;
        opacity: 0.9;
    }
`
S.RollImg = styled.img`
    height: 80%;
`

S.RollName = styled.h3`
    height: 20%;
    display:flex;
    align-items: center;
    justify-content: center;
`

S.InfoContainer = styled.div`
    visibility: hidden;
    width: 100%;
    height: 80%;
    position: absolute;
    background-color: white;
    opacity: 0;
    transition: visibility 0s, opacity 0.2s linear;
`

S.InfoTitle = styled.h2`
    padding-left: 5px;
    margin-bottom: 2px;
`

S.Info = styled.p`
    padding-left: 5px;
`

S.Price = styled.p`
    position: absolute;
    right: 5px;
    font-size: 20px;
`

S.Bold = styled.span`
    font-weight: bolder;
`

export default S