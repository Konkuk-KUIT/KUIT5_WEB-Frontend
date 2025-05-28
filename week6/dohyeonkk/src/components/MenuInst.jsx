import React from 'react'
import styled from "styled-components"
import BlueButton from './Button';


const MainDiv = styled.div`
    width: 390px;
    font-family: "Pretendard";
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 24px;
    padding: 16px 24px ;
    p{
        margin: 0;
    }
`;
const FontBold = styled.p`
    font-weight: 600;
    font-size: 17px;
    color: #333d3b;
    margin: 0;
`;
const FontLight = styled.p`
    color:#6b7684;
    font-size: 13px;
    font-weight: 500;
    margin: 0;
`;

const TextDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap:6px;
`;

const TextAlign = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;



const MenuInst = ({ menu, best, price, inst }) => {
    return (
        <MainDiv>
            <img style={{ borderRadius: "27px", width: "54px", height: "54px" }} src='http://placehold.co/54x54' alt="placeholder" />
            <TextAlign>
                <TextDiv>
                    <FontBold>{menu}</FontBold>
                    {(best === 1) && <FontBold style={{color:"#3182F6"}}>BEST</FontBold>}
                </TextDiv>
                <FontLight>{price}원</FontLight>
                <FontLight style={{width:"190px"}}>
                    {inst}
                </FontLight>
            </TextAlign>
            <BlueButton style={{padding:"8px 14px", width:"24px", height:"16px"}}>담기</BlueButton>
        </MainDiv>
    )
}

export default MenuInst
