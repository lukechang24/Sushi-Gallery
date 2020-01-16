import styled from "styled-components"

const S = {}

S.RollContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
    justify-content: center;
    grid-column-gap: 50px;
    grid-row-gap: 25px;
`

S.Roll = styled.div`
    position: relative;
    width: 300px;
    height: 200px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1.5px solid black;
    &.show :nth-child(3) {
        display: flex;
        flex-direction: column;

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
    display: none;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    opacity: 0.8;
    transition: display, 1s;
`
S.InfoTitle = styled.h3`

`


S.Info = styled.p`

`

export default S