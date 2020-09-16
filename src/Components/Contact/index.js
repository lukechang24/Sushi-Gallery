import React from "react"
import S from "./style"

const Contact = () => {
    return(
        <S.Container1>
            <S.Overlay></S.Overlay>
            <S.PhoneContainer>
                 <h1>Call us at (562) 926-6556</h1>
            </S.PhoneContainer>
            <S.DeliveryContainer>
                {/* <S.DeliveryApp font='Barlow Condensed' backgroundColor="#F6343F" color="white">GRUBHUB</S.DeliveryApp>
                <S.DeliveryApp>Postmates</S.DeliveryApp>
                <S.DeliveryApp>Uber <S.Green>Eats</S.Green></S.DeliveryApp> */}
                <S.DeliveryApp src="https://learn.grubhub.com/wp-content/uploads/2018/07/DOL-branded-300x71.png"></S.DeliveryApp>
                <S.DeliveryApp src="https://www.greenbaglunch2go.com/wp-content/uploads/2019/06/button-postmates.png"></S.DeliveryApp>
                <S.DeliveryApp src="https://images.squarespace-cdn.com/content/v1/5c89392b7d0c913d346532c7/1579040542246-PT5FY9ZVTSD1BHUKOBUC/ke17ZwdGBToddI8pDm48kHwVRMbgD4xuxk8wSx9uTtZZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHoPIrBR5F6J03dLhMIV0FsThI58P6_y3TPWhpJtU9Cme87Nsj43NRAr6WuWZv5DKs/button-ubereats.png"></S.DeliveryApp>

            </S.DeliveryContainer>
        </S.Container1>
    )
}

export default Contact