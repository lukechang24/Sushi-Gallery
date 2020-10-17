import React from "react"
import S from "../Sushi/style"

const Combinations = (props) => {
    const entrees = props.entrees ? props.entrees.elements : []
    const entreesList = entrees.map((entree, i) => {
        return(
            <S.Item key={i}>
                <S.Name>{entree.name}</S.Name>
                <S.Price>${entree.price}</S.Price>
            </S.Item>
        )
    })
    const bentos = props.bentos ? props.bentos.elements : []
    const bentosPrice = bentos[0].price
    const bentosList = bentos.map((bento, i) => {
        return(
            <S.Item key={i}>
                <S.Name>{bento.name}</S.Name>
            </S.Item>
        )
    })
    const sushiCombos = props.sushiCombos ? props.sushiCombos.elements : []
    const sushiCombosList = sushiCombos.map((sushiCombo, i) => {
        return(
            <S.ItemDescriptionBox>
                <S.Item key={i}>
                    <S.Name>{sushiCombo.name}</S.Name>
                    <S.Price>${sushiCombo.price}</S.Price>
                </S.Item>
                <S.Description>{sushiCombo.description}</S.Description>
            </S.ItemDescriptionBox>
        )
    })
    return(
        <S.Container1>
            <S.Container2>
                <S.List>
                    <S.SubCatergory>Entrees</S.SubCatergory>
                    {entreesList}
                    <S.SubCatergory>Bento Box &nbsp;(pick two)</S.SubCatergory>
                    <S.Message>${bentosPrice}</S.Message>
                    {bentosList}
                    <S.SubCatergory>Sushi Combo</S.SubCatergory>
                    {sushiCombosList}
                </S.List>
            </S.Container2>
        </S.Container1>
    )
}

export default Combinations