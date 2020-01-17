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
    @media only screen and (max-width: 992px) {
        display: none;
    }
`
S.Title = styled.h1`
    font-family: "Brownies";
    letter-spacing: 2px;
    font-size: 50px;
    color: white;
    text-align: center;
    padding: 10px 0;
`

S.LinkContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
S.Link = styled(NavLink)`
    color: white;
    text-decoration: none;
`

export default S