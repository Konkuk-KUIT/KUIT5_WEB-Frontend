import React from 'react'
import styled from "styled-components"



const MainDiv = styled.div`
    font-family: "Pretendard";
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 18px;
    padding: 16px 20px 16px 24px;
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
`;

const TextAlign = styled.div`
    display: flex;
    width: 200px;
    flex-direction: column;
    gap: 4px;
`;


const OrderMenu = ({ name, inst, price, count }) => {
    return (
        <div>
            <MainDiv>
                <img style={{ borderRadius: "8px", width: "54px", height: "54px" }} src='http://placehold.co/54x54' alt="placeholder" />
                <TextAlign>
                    <FontBold>{name}</FontBold>
                    <FontLight>{inst}</FontLight>
                    <FontLight> {price}원</FontLight>
                </TextAlign>
                <FontLight>{count}개</FontLight>
                <img src='/img/rightarrow.svg' alt='right arrow' />
            </MainDiv>
            <hr style={{ marginTop: "10px",marginBottom:"0px", border: 'none', height: "1px", backgroundColor: "#ddd" }} />            
        </div>

    )
}

export default OrderMenu
