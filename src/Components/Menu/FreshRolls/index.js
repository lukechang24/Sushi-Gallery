import React from "react"
import S from "./style"
import NA from "../images/NA1.png"

const FreshRolls = (props) => {
    const freshRolls = props.freshRolls ? props.freshRolls.elements : []
    const rollList = freshRolls.map((roll, i) => {
        return(
            <S.Roll key={i} className="roll">
                <S.RollImg src={NA}></S.RollImg>
                <S.RollName>{roll.name.toUpperCase()}</S.RollName>
                <S.InfoContainer>
                <S.Price>${roll.price}</S.Price>
                    <S.InfoTitle>Main Ingredients</S.InfoTitle>
                    {
                        roll.base
                            ?
                                <S.Info><S.Bold>Base: </S.Bold>{roll.base}</S.Info>
                            :
                                <S.Info><S.Bold>In: </S.Bold>{roll.in}</S.Info>

                    }
                    {
                        roll.top
                            ?
                                <S.Info><S.Bold>Top: </S.Bold>{roll.top}</S.Info>
                            :
                                <S.Info><S.Bold>Out: </S.Bold>{roll.out}</S.Info>

                    }
                </S.InfoContainer>
            </S.Roll>
        )
    })
    return(
        <S.RollContainer>
            {rollList}
        </S.RollContainer>
    )
}

export default FreshRolls