import styled from "styled-components"
import { NavLink } from "react-router-dom"

const S = {}

S.Navbar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 20%;
    height: 100vh;
    background-color: black;
`
S.Title = styled.h1`
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