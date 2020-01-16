import React from "react"
import S from "./style"
import roll from "../Images/roll.jpg"


const FreshRolls = () => {
    return(
        <S.RollContainer>
            <S.Roll className="roll">
                <S.RollImg src={roll}></S.RollImg>
                <S.RollName>California Roll</S.RollName>
                <S.InfoContainer>
                    <S.InfoTitle>Ingredients</S.InfoTitle>
                    <S.Info>blah blah blah blah blah</S.Info>
                    <S.Info>blah blah blah blah blah</S.Info>
                </S.InfoContainer>
            </S.Roll>
            <S.Roll className="roll">

            </S.Roll>
            <S.Roll className="roll">

            </S.Roll>
            <S.Roll className="roll">

            </S.Roll>
        </S.RollContainer>
    )
}

export default FreshRolls