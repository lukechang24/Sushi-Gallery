import React from "react"
import S from "./style"

const Navbar = () => {
    return(
        <S.Navbar>
            <S.Title>Sushi Gallery</S.Title>
            <S.LinkContainer>
                <S.Link to="/menu">MENU</S.Link>
                <S.Link to="/about">ABOUT</S.Link>
                <S.Link to="/contact">CONTACT</S.Link>
            </S.LinkContainer>
        </S.Navbar>
    )
}

export default Navbar