import React from "react"
import S from "../Sushi/style"

const Sides = (props) => {
    const sides = props.side ? props.side : []
    const sidesList = sides.map((side, i) => {
        const newName = side.name.split("").map((letter, i, arr) => arr.indexOf("(") < i && arr.indexOf("(") >= 0 ? letter : letter.toUpperCase()).join("")
        return(
            <S.ItemDescriptionBox key={i}>
                <S.Item>
                    <S.Name>{side.name}</S.Name>
                    <S.Price>${side.price}</S.Price>
                </S.Item>
                <S.Description>{side.description}</S.Description>
            </S.ItemDescriptionBox>
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