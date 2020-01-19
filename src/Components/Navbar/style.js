import styled from "styled-components"
import { NavLink } from "react-router-dom"
const S = {}

S.Navbar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 25%;
    height: 100vh;
    background-color: black;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media only screen and (max-width: 992px) {
        display: none;
    }
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
    margin-top: 25px;
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
    margin-top: 50px;
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


export default S