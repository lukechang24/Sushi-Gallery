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
        const firstItem = bento.name
        const secondItem = bentos[i+1] ? bentos[i+1].name : null
        if(i % 2 === 1) {
            return
        }
        return(
            <S.Item isBento="true" key={i}>
                <S.Item half="true">
                    <S.Name isBento="true">{firstItem}</S.Name>
                </S.Item>
                <S.Item half="true">
                    <S.Name isBento="true">{secondItem}</S.Name>
                </S.Item>
            </S.Item>
        )
    })
    const sushiCombos = props.sushiCombos ? props.sushiCombos.elements : []
    const sushiCombosList = sushiCombos.map((sushiCombo, i) => {
        return(
            <S.ItemDescriptionBox key={i}>
                <S.Item>
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
                    <S.Message>Comes with rice, salad, and 4pcs of Cali Roll</S.Message>
                    {entreesList}
                    <S.SubCatergory>Bento Box &nbsp;(pick two)</S.SubCatergory>
                    <S.Message>Comes with rice, salad, and 4pcs of Cali Roll</S.Message>
                    <S.Price>${bentosPrice}</S.Price>
                    {bentosList}
                    <S.SubCatergory>Sushi Combo</S.SubCatergory>
                    <S.Message>Comes with salad</S.Message>
                    {sushiCombosList}
                </S.List>
            </S.Container2>
        </S.Container1>
    )
}

export default Combinations