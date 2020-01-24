import React from "react"
import Nav from "../Navbar"
import SmallNav from "./SmallNav"
import S from "./style"

const HamburgerNav = (props) => {
    return(
        <>
            <S.Hamburger onClick={props.handleNav}>
                <S.Line></S.Line>
                <S.Line></S.Line>
                <S.Line></S.Line>
            </S.Hamburger>
            {
                props.showNav
                    ?
                        <S.Container1>
                            <SmallNav />
                        </S.Container1>
                    :
                        null
            }
        </>
    )
}

export default HamburgerNav
