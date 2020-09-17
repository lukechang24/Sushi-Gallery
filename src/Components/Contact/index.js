import React from "react"
import S from "./style"

const Contact = () => {
    return(
        <S.Container1>
            <S.Overlay></S.Overlay>
            <S.Container2>
                <S.PhoneContainer>
                    <S.PhoneHeading>Call us at: </S.PhoneHeading>
                    <S.PhoneNumber href="tel:562-926-6556">562-926-6556</S.PhoneNumber>
                </S.PhoneContainer>
                <S.DeliveryContainer>
                    <S.DeliveryHeading>Order through food delivery app</S.DeliveryHeading>
                    <S.DeliveryLink href="https://www.grubhub.com/restaurant/sushi-gallery-16436-norwalk-blvd-cerritos/2053881" target="_blank" title="Grubhub">
                        <S.DeliveryImage src="https://www.greenbaglunch2go.com/wp-content/uploads/2019/06/button-grubhub.png" ></S.DeliveryImage>
                    </S.DeliveryLink>
                    <S.DeliveryLink href="https://postmates.com/merchant/sushi-gallery-cerritos" target="_blank" title="Postmates">
                        <S.DeliveryImage src="https://www.greenbaglunch2go.com/wp-content/uploads/2019/06/button-postmates.png"></S.DeliveryImage>
                    </S.DeliveryLink>
                    <S.DeliveryLink href="https://www.ubereats.com/los-angeles/food-delivery/sushi-gallery/o3Ph-roTR1SnxAhvKAEIkA" target="_blank" title="Uber Eats">
                        <S.DeliveryImage src="https://images.squarespace-cdn.com/content/v1/5c89392b7d0c913d346532c7/1579040542246-PT5FY9ZVTSD1BHUKOBUC/ke17ZwdGBToddI8pDm48kHwVRMbgD4xuxk8wSx9uTtZZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHoPIrBR5F6J03dLhMIV0FsThI58P6_y3TPWhpJtU9Cme87Nsj43NRAr6WuWZv5DKs/button-ubereats.png"></S.DeliveryImage>
                    </S.DeliveryLink>
                </S.DeliveryContainer>
            </S.Container2>
        </S.Container1>
    )
}

export default Contact