import React from "react"
import S from "./style"
import oki from "../Menu/images/oki.jpg"

const About = () => {
    return(
        <S.Container1>
            <S.Overlay></S.Overlay>
            <S.Container2>
                <S.TextContainer>
                    <S.Title>About Us</S.Title>
                    <S.About>Sushi Gallery is a family-owned sushi restaurant that has been around for 15 years. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</S.About>
                </S.TextContainer>
                <S.Picture src={oki}></S.Picture>
            </S.Container2>
        </S.Container1>
    )
}

export default About