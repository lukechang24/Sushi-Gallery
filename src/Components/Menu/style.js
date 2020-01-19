import styled from "styled-components"

const S = {}

S.Container1 = styled.div`
    width: 75%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 992px) {
        width: 100%;
    }
    /* background-image: url(https://www.sokhahotels.com.kh/sihanoukville/img/high-resolution-downloads/Food%20and%20Beverage/Restaurants/Lemongrass%20Restaurant%201.jpg);
    background-size: cover;
    background-repeat: no-repeat; */
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

S.Spinner = styled.i`
    font-size: 50px;
    margin-top: 200px;
    @media only screen and (max-width: 992px) {
        margin-top: 100px;
    }
`

export default S