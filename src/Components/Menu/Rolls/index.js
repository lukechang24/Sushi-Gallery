import React from "react"
import S from "./style"

const Rolls = (props) => {
    const freshRoll = props.freshRoll ? props.freshRoll : []
    const freshRollList = freshRoll.map((roll, i) => {
        return(
            <S.Roll key={i} className="roll">
                <S.RollImg src={roll.url}></S.RollImg>
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
    const cookedRoll = props.cookedRoll ? props.cookedRoll : []
    const cookedRollList = cookedRoll.map((roll, i) => {
        return(
            <S.Roll key={i} className="roll">
                <S.RollImg src={roll.url}></S.RollImg>
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
        <S.Container1>
            <S.SubCategory isRoll="true">FRESH ROLLS</S.SubCategory>
            <S.Message1><S.MouseIcon></S.MouseIcon>hover to show more information</S.Message1>
            <S.Message2><S.TouchIcon></S.TouchIcon>touch to show more information</S.Message2>
            <S.RollContainer>{freshRollList}</S.RollContainer>
            <S.SubCategory isRoll="true">COOKED ROLLS</S.SubCategory>
            <S.RollContainer>{cookedRollList}</S.RollContainer>
        </S.Container1>
    )
}

export default Rolls