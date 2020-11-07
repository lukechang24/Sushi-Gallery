import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { Phone } from "@styled-icons/boxicons-regular/Phone"

const S = {}

S.Navbar = styled.div`
    position: fixed;
    top: 0;
    width: 250px;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #0C1821;
    margin-left: 2.5%;
    @media only screen and (max-width: 1040px) {
        width: 400px;
    }
    @media only screen and (max-width: 700px) {
        width: 350px;
    }
    @media only screen and (max-width: 400px) {
        width: 300px;
        margin-left: 2.5%;
    }
`

S.TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`

S.Title = styled(NavLink)`
    font-family: "Brownies";
    font-size: 50px;
    letter-spacing: 2px;
    margin-top: 30px;
    color: white;
    text-align: center;
    text-decoration: none;
    padding: 10px 0;
`

S.LinkContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
`

S.Link = styled(NavLink)`
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
    font-size: 20px;
    text-decoration: none;
    color: white;
    padding-bottom: 2.5px;
    margin: 10px 0;
    border-bottom: 1.5px solid transparent;
    &.active {
        color: #C62503;
    }
    &:hover {
        border-bottom: 1.5px solid white;
    }
`

S.SocialContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0 75px;
`

S.Icon = styled.a`
    color: ${props => props.color};
    font-size: 30px;
    text-decoration: none;
    &:hover {
        color: darkslateblue;
    }
`

S.Circle = styled.div`
    height: 7px;
    width: 7px;
    border-radius: 10px;
    margin: 0 10px;
    background-color: white;
`

S.InformationContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 5px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    @media only screen and (max-height: 700px) {
        margin-bottom: 20px;
    }
`

S.PhoneNumber = styled.a`
    font-size: 20px;
    color: white;
    @media only screen and (max-width: 400px) {
        font-size: 15px;
    }
`

S.PhoneIcon = styled(Phone)`
    width: 20px;
    margin: 0 5px;
    @media only screen and (max-width: 400px) {
        width: 15px;
    }
`

S.Location = styled.a`
    width: 100%;
    font-size: 15px;
    word-spacing: 5px;
    color: white;
    margin: 10px 0;
    @media only screen and (max-width: 400px) {
        font-size: 15px;
    }
`


S.Hours = styled.p`
    font-size: 12.5px;
    color: #C8C8C8;
`

export default S