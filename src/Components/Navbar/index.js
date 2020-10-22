import React from "react"
import S from "./style"

const Navbar = () => {
    return(
        <S.Navbar>
            <S.TitleDiv>
                <S.Title to="/">Sushi Gallery</S.Title>
            </S.TitleDiv>
            <S.LinkContainer>
                <S.Link to="/menu">MENU</S.Link>
                <S.Link to="/about">ABOUT</S.Link>
                <S.Link to="/delivery">DELIVERY</S.Link>
            </S.LinkContainer>
            <S.SocialContainer>
                <S.Icon href="https://www.yelp.com/biz/sushi-gallery-cerritos" target="_blank" title="Yelp" color="#C62503" className="fab fa-yelp"></S.Icon>
                <S.Circle></S.Circle>
                <S.Icon href="https://www.instagram.com/sushigallery007/" target="_blank" title="Instagram" color="white" className="fab fa-instagram"></S.Icon>
            </S.SocialContainer>
            <S.PhoneNumber href="tel:562-926-6556"><S.PhoneIcon></S.PhoneIcon>(562) 926-6556</S.PhoneNumber>
            <S.Location href="https://www.google.com/maps/place/16436+Norwalk+Blvd,+Cerritos,+CA+90703/@33.8809807,-118.0744492,17z/data=!3m1!4b1!4m5!3m4!1s0x80dd2d193db815cd:0x8384f6c6b8a569ea!8m2!3d33.8809807!4d-118.0722605" target="_blank">16436 Norwalk Blvd Cerritos, CA 90703</S.Location>
            <S.Hours>
                Mon – Sat : 11:30AM – 2:30PM & 5:00PM - 9:00PM<br/>
                Sun : Closed
            </S.Hours>
        </S.Navbar>
    )
}

export default Navbar