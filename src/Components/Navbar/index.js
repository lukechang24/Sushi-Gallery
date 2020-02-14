import React from "react"
import S from "./style"

const Navbar = () => {
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
                <S.Link to="/menu">MENU</S.Link>
                <S.Link to="/about">ABOUT</S.Link>
                <S.Link to="/contact">CONTACT</S.Link>
            </S.LinkContainer>
            <S.SocialContainer>
                <S.Icon href="https://www.yelp.com/biz/sushi-gallery-cerritos" target="_blank" title="Yelp" color="#C62503" className="fab fa-yelp"></S.Icon>
                <S.Circle></S.Circle>
                <S.Icon href="https://www.instagram.com/sushigalleryoki/" target="_blank" title="Instagram" color="white" className="fab fa-instagram"></S.Icon>
            </S.SocialContainer>
            <S.Location href="https://www.google.com/maps/place/16436+Norwalk+Blvd,+Cerritos,+CA+90703/@33.8809807,-118.0744492,17z/data=!3m1!4b1!4m5!3m4!1s0x80dd2d193db815cd:0x8384f6c6b8a569ea!8m2!3d33.8809807!4d-118.0722605" target="_blank">16436 Norwalk Blvd Cerritos, CA 90703</S.Location>
        </S.Navbar>
    )
}

export default Navbar