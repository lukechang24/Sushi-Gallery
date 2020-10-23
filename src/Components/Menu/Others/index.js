import React from "react"
import S from "../Sushi/style"

const Others = (props) => {
    const noodles = props.noodles ? props.noodles.elements : []
    const noodlesList = noodles.map((noodle, i) => {
        return(
            <S.Item key={i}>
                <S.Name>{noodle.name}</S.Name>
                <S.Price>${noodle.price}</S.Price>
            </S.Item>
        )
    })
    const salads = props.salads ? props.salads.elements : []
    const saladsList = salads.map((salad, i) => {
        return(
            <S.Item key={i}>
                <S.Name>{salad.name}</S.Name>
                <S.Price>${salad.price}</S.Price>
            </S.Item>
        )
    })
    const donburi = props.donburi ? props.donburi.elements : []
    const donburiList = donburi.map((donburi, i) => {
        return(
            <S.Item key={i}>
                <S.Name>{donburi.name}</S.Name>
                <S.Price>${donburi.price}</S.Price>
            </S.Item>
        )
    })
    const partyTrays = props.partyTrays ? props.partyTrays.elements : []
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
    const desserts = props.desserts ? props.desserts.elements : []
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
                    <S.SubCatergory>Noodles</S.SubCatergory>
                    {noodlesList}
                    <S.SubCatergory>Salads</S.SubCatergory>
                    {saladsList}
                    <S.SubCatergory>Donburi</S.SubCatergory>
                    {donburiList}
                    <S.SubCatergory>Party Trays</S.SubCatergory>
                    {/* <S.PictureContainer>
                        <S.Picture src={partyTrayUrl}></S.Picture>
                        <S.PictureCaption>{partyTrayCaption}</S.PictureCaption>
                    </S.PictureContainer> */}
                    {partyTraysList}
                    <S.SubCatergory>Desserts</S.SubCatergory>
                    {dessertsList}
                </S.List>
            </S.Container2>
        </S.Container1>
    )
}

export default Others