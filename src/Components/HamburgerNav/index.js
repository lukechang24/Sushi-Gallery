import React from "react"
import Nav from "../Navbar"
import SmallNav from "./SmallNav"
import S from "./style"

const HamburgerNav = (props) => {
    return(
        <S.TitleContainer>
            <S.Title>Sushi Gallery</S.Title>
            <S.Hamburger id="hamburger" onClick={props.handleNav}>
                <S.Line></S.Line>
                <S.Line></S.Line>
                <S.Line></S.Line>
            </S.Hamburger>
            {
                props.showNav
                    ?
                        <S.Container1>
                            <SmallNav hideNav={props.hideNav}/>
                        </S.Container1>
                    :
                        null
            }
        </S.TitleContainer>
    )
}

export default HamburgerNav
