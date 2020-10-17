import React from "react"
import S from "../Sushi/style"
import NA from "../images/NA1.png"

const Sides = (props) => {
    const sides = props.sides ? props.sides.elements : []
    const sidesList = sides.map((side, i) => {
        const newName = side.name.split("").map((letter, i, arr) => arr.indexOf("(") < i && arr.indexOf("(") >= 0 ? letter : letter.toUpperCase()).join("")
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