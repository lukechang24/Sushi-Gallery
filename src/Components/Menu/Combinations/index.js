import React from "react"
import S from "../Sushi/style"

const Combinations = (props) => {
    const bento = props.bento ? props.bento : []
    const bentoPrice = bento.price
		const bentoTypes = bento.map((bento, i) => {
			if (i < 2) {
				return(
					<S.ItemDescriptionBox key={i}>
						<S.Item>
							<S.Name>{bento.name}</S.Name>
							<S.Price>${bento.price}</S.Price>
						</S.Item>
						<S.Description>{bento.description}</S.Description>
					</S.ItemDescriptionBox>
				)
			} else if (i === 2) {
				const item = bento.description.split(", ")
				console.log(item, "this")
				const itemList = item.map((item, i, arr) => {
					const firstItem = arr[i]
					const secondItem =  arr[i+1] ? arr[i+1] : null
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
				return(
					<>
						<S.Category>Items</S.Category>
						{itemList}
					</>
				)
			} else {
				const side = bento.description.split(", ")
				console.log(side, "this")
				const sideList = side.map((side, i, arr) => {
					const firstSide = arr[i]
					const secondSide =  arr[i+1] ? arr[i+1] : null
					if(i % 2 === 1) {
							return
					}
					return(
						<S.Item isBento="true" key={i}>
                <S.Item half="true">
                    <S.Name isBento="true">{firstSide}</S.Name>
                </S.Item>
                <S.Item half="true">
                    <S.Name isBento="true">{secondSide}</S.Name>
                </S.Item>
            </S.Item>
					)
				})
				return(
					<>
						<S.Category>Sides</S.Category>
						{sideList}
					</>
				)
			}
		})
    const sushiCombos = props.sushiCombo ? props.sushiCombo : []
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
                    <S.SubCategory>Bento Box</S.SubCategory>
										{bentoTypes}
                    <S.SubCategory>Sushi Combo</S.SubCategory>
                    <S.Message>Comes with salad</S.Message>
                    {sushiCombosList}
                </S.List>
            </S.Container2>
        </S.Container1>
    )
}

export default Combinations