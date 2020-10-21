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
    @media only screen and (max-width: 650px) {
        width: 350px;
    }
    @media only screen and (max-width: 375px) {
        width: 300px;
        margin-left: 15px;
    }
`

S.TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`

S.Title = styled(NavLink)`
    font-family: "Brownies";
    font-size: 40px;
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

S.Hours = styled.p`
    font-size: 15px;
    padding: 0 10px;
    color: white;
    text-align: center;
`

S.Location = styled.a`
    width: 75%;
    font-size: 15px;
    word-spacing: 5px;
    color: white;
    text-align: center;
    margin: 10px 0;
`

S.PhoneNumber = styled.a`
    font-size: 15px;
    color: white;
`

S.PhoneIcon = styled(Phone)`
    width: 15px;
    margin: 0 5px;
`


export default S