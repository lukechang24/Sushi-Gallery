import React from "react"
import S from "./style"

const Navbar = () => {
    return(
        <S.Navbar>
            <S.Title to="/">Sushi Gallery</S.Title>
            <S.LinkContainer>
                <S.Link to="/menu">MENU</S.Link>
                <S.Link to="/about">ABOUT</S.Link>
                <S.Link to="/contact">CONTACT</S.Link>
            </S.LinkContainer>
            <S.SocialContainer>
                <S.Icon href="https://www.yelp.com/biz/sushi-gallery-cerritos" target="_blank" title="Yelp" color="#C62503" className="fab fa-yelp"></S.Icon>
                <S.Circle></S.Circle>
                <S.Icon href="https://www.instagram.com/sushigalleryoki/" target="_blank" title="Instagram" color="white" className="fab fa-instagram"></S.Icon>
            </S.SocialContainer>
        </S.Navbar>
    )
}

export default Navbar