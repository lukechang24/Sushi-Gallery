import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { Phone } from "@styled-icons/boxicons-regular/Phone"

const S = {}

S.Navbar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 25%;
    height: 100vh;
    background-color: #0C1821;
    /* background-image: linear-gradient(to bottom right, hsl(206, 47%, 5%), hsl(206, 47%, 10%), hsl(206, 47%, 20%)); */
    display: flex;
    align-items: center;
    flex-direction: column;
    @media only screen and (max-width: 1300px) {
        width: 30%;
    }
    @media only screen and (max-width: 1040px) {
        display: none;
    }
`

S.TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`

S.Title = styled(NavLink)`
    font-family: "Brownies";
    letter-spacing: 2px;
    font-size: 50px;
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
    margin-bottom: 50px;
`

S.Link = styled(NavLink)`
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
    font-size: 20px;
    text-decoration: none;
    color: white;
    padding-bottom: 2.5px;
    margin: 25px 0;
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
    margin-bottom: 100px;
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
    left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
`

S.PhoneNumber = styled.a`
    font-size: 20px;
    color: white;
`

S.Location = styled.a`
    width: 100%;
    font-size: 15px;
    word-spacing: 5px;
    color: white;
    margin: 10px 0;
`

S.PhoneIcon = styled(Phone)`
    width: 20px;
    margin: 0 5px;
`

S.Hours = styled.p`
    font-size: 15px;
    color: #C8C8C8;
`

export default S