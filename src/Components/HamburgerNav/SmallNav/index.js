import React from "react"
import S from "./style"

const SmallNav = (props) => {
    const exitNav = () => {
        document.querySelector("#hamburger").classList.remove("active")
        props.hideNav()
    }
    return(
        <S.Navbar>
            <S.TitleDiv>
                <S.Title to="/">Sushi Gallery</S.Title>
                <S.Hours>
                    Mon – Sat : 11:30 – 2:30pm & 5:00pm - 9:00pm<br/>
                    Sun : Closed
                </S.Hours>
            </S.TitleDiv>
            <S.LinkContainer>
                <S.Link onClick={exitNav} to="/menu">MENU</S.Link>
                <S.Link onClick={exitNav} to="/about">ABOUT</S.Link>
                <S.Link onClick={exitNav} to="/contact">CONTACT</S.Link>
            </S.LinkContainer>
            <S.SocialContainer>
                <S.Icon href="https://www.yelp.com/biz/sushi-gallery-cerritos" target="_blank" title="Yelp" color="#C62503" className="fab fa-yelp"></S.Icon>
                <S.Circle></S.Circle>
                <S.Icon href="https://www.instagram.com/sushigallery007/" target="_blank" title="Instagram" color="white" className="fab fa-instagram"></S.Icon>
            </S.SocialContainer>
        </S.Navbar>
    )
}

export default SmallNav