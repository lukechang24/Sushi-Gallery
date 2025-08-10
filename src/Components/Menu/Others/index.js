import React from "react"
import S from "../Sushi/style"

const Others = (props) => {
    const noodles = props.noodle ? props.noodle : []
    const noodlesList = noodles.map((noodle, i) => {
        return(
            <S.Item key={i}>
                <S.Name>{noodle.name}</S.Name>
                <S.Price>${noodle.price}</S.Price>
            </S.Item>
        )
    })
    const salads = props.salad ? props.salad : []
    const saladsList = salads.map((salad, i) => {
        return(
            <S.Item key={i}>
                <S.Name>{salad.name}</S.Name>
                <S.Price>${salad.price}</S.Price>
            </S.Item>
        )
    })
    const donburi = props.donburi ? props.donburi : []
    const donburiList = donburi.map((donburi, i) => {
        return(
            <S.Item key={i}>
                <S.Name>{donburi.name}</S.Name>
                <S.Price>${donburi.price}</S.Price>
            </S.Item>
        )
    })
    const partyTrays = props.partyTray ? props.partyTray : []
    const partyTrayUrl = partyTrays[0].url
    const partyTrayCaption = partyTrays[0].name
    const partyTraysList = partyTrays.map((partyTray, i) => {
        return(
            <S.ItemDescriptionBox key={i}>
                <S.Item>
                    <S.Name>{partyTray.name}</S.Name>
                    <S.Price>${partyTray.price}</S.Price>
                </S.Item>
            <S.Description>{partyTray.description}</S.Description>
            </S.ItemDescriptionBox>
        )
    })
    const desserts = props.dessert ? props.dessert : []
    const dessertsList = desserts.map((dessert, i) => {
        return(
            <S.ItemDescriptionBox key={i}>
                <S.Item>
                    <S.Name>{dessert.name}</S.Name>
                    <S.Price>${dessert.price}</S.Price>
                </S.Item>
            <S.Description>{dessert.description}</S.Description>
            </S.ItemDescriptionBox>
        )
    })
    return(
        <S.Container1>
            <S.Container2>
                <S.List>
                    <S.SubCategory>Noodles</S.SubCategory>
                    {noodlesList}
                    <S.SubCategory>Salads</S.SubCategory>
                    {saladsList}
                    <S.SubCategory>Donburi</S.SubCategory>
                    {donburiList}
                    <S.SubCategory>Party Trays</S.SubCategory>
                    {/* <S.PictureContainer>
                        <S.Picture src={partyTrayUrl}></S.Picture>
                        <S.PictureCaption>{partyTrayCaption}</S.PictureCaption>
                    </S.PictureContainer> */}
                    {partyTraysList}
                    <S.SubCategory>Desserts</S.SubCategory>
                    {dessertsList}
                </S.List>
            </S.Container2>
        </S.Container1>
    )
}

export default Others