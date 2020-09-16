import React from "react"
import S from "../FreshRolls/style"
import NA from "../images/NA1.png"

const CookedRolls = (props) => {
    const cookedRolls = props.cookedRolls ? props.cookedRolls.elements : []
    const rollList = cookedRolls.map((roll, i) => {
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
        <S.RollContainer>
            {rollList}
        </S.RollContainer>
    )
}

export default CookedRolls