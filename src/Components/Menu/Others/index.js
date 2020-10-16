import React from "react"
import S from "../Sushi/style"

const Others = (props) => {
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
    const bentosList = bentos.map((bento, i) => {
        return(
            <S.Item key={i}>
                <S.Name>{bento.name}</S.Name>
            </S.Item>
        )
    })
    return(
        <S.Container1>
            <S.Container2>
                <S.List>
                    <S.SubCatergory>Entrees</S.SubCatergory>
                    {entreesList}
                    <S.SubCatergory>Bentos (pick two)</S.SubCatergory>
                    <S.Message>$13.99</S.Message>
                    {bentosList}

                </S.List>
            </S.Container2>
        </S.Container1>
    )
}

export default Others