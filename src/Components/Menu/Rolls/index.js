import React from "react"
import S from "./style"

const Rolls = (props) => {
    const freshRolls = props.freshRolls ? props.freshRolls.elements : []
    const freshRollsList = freshRolls.map((roll, i) => {
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
    const cookedRolls = props.cookedRolls ? props.cookedRolls.elements : []
    const cookedRollsList = cookedRolls.map((roll, i) => {
        return(
            <S.Roll key={i} className="roll">
                <S.RollImg src={roll.url}></S.RollImg>
                <S.RollName>{roll.name.toUpperCase()}</S.RollName>
                <S.InfoContainer>
                <S.Price>${roll.price}</S.Price>
                    <S.InfoTitle>Ingredients</S.InfoTitle>
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
            <S.SubCatergory isRoll="true">FRESH ROLLS</S.SubCatergory>
            <S.RollContainer>{freshRollsList}</S.RollContainer>
            <S.SubCatergory isRoll="true">COOKED ROLLS</S.SubCatergory>
            <S.RollContainer>{cookedRollsList}</S.RollContainer>
        </S.Container1>
    )
}

export default Rolls