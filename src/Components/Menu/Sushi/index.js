import React from "react"
import S from "./style"

const Sushi = (props) => {
    const sushi = props.sushi ? props.sushi.elements : []
    const sushiList = sushi.map((sushi, i) => {
        const newName = sushi.name.split("").map((letter, i, arr) => arr.indexOf("(") < i && arr.indexOf("(") >= 0 ? letter : letter.toUpperCase()).join("")
        return(
            <S.Item key={i}>
                <S.Name>{sushi.name}</S.Name>
                <S.Price>${sushi.price}</S.Price>
            </S.Item>
        )
    })
    return(
        <S.Container1>
            <S.Container2>
                <S.List>
                    <S.Message>2 pieces with each order</S.Message>
                    {sushiList}
                </S.List>
            </S.Container2>
        </S.Container1>
    )
}

export default Sushi