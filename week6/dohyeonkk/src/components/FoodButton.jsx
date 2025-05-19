import React from 'react'
import styled from "styled-components"

export const ButtonDesign = styled.button `
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
width: 108px;
height: 74px;
border-radius: 8px;
border: 0;
padding: 0;
line-height: normal;
gap: 4px;
background-color: #FAFAFB;
`;


const FoodButton = ({src, name}) => {
    return (
            <ButtonDesign>
                <img src={src} style={{width: '28px',height:'28px'}} alt={name}/>
                <p style={{font:'14pt', margin:0, fontFamily:"Pretendard"}}>{name}</p>
                
            </ButtonDesign>
    )
}

export default FoodButton
