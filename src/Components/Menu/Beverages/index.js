import React from "react"
import S from "../Sushi/style"

const Beverages = (props) => {
    const beverages = props.beverages ? props.beverages.elements : []
    const beveragesList = beverages.map((beverage, i) => {
        const newName = beverage.name.split("").map((letter, i, arr) => arr.indexOf("(") < i && arr.indexOf("(") >= 0 ? letter : letter.toUpperCase()).join("")
        return(
            <S.ItemDescriptionBox key={i}>
                <S.Item>
                    <S.Name>{beverage.name}</S.Name>
                    {
                        beverage.small
                            ?
                                <S.PriceDiv>
                                    <S.Price margin="5px 0">S: ${beverage.small}</S.Price>
                                    <S.Price margin="5px 0">L: ${beverage.large}</S.Price>
                                </S.PriceDiv>
                            :
                                <S.Price>${beverage.price}</S.Price>
                    }
                </S.Item>
                <S.Description>{beverage.description}</S.Description>
            </S.ItemDescriptionBox>
        )
    })
    return(
        <S.Container1>
            <S.Container2>
                <S.List>
                    <S.Message>Free refills for items marked with *</S.Message>
                    {beveragesList}
                </S.List>
            </S.Container2>
        </S.Container1>
    )
}

export default Beverages