import React from "react"
import S from "../Sushi/style"

const Sides = (props) => {
    const sides = props.sides ? props.sides.elements : []
    const sidesList = sides.map((side, i) => {
        return(
            <S.Item key={i}>
                <S.Name>{side.name}</S.Name>
                <S.Price>${side.price}</S.Price>
            </S.Item>
        )
    })
    return(
        <S.Container1>
            <S.Container2>
                <S.List>
                    {sidesList}
                </S.List>
            </S.Container2>
        </S.Container1>
    )
}

export default Sides