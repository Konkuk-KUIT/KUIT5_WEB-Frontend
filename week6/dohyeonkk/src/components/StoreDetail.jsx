import React from 'react'
import styled from "styled-components"

const MainDiv = styled.div`
    font-family: "Pretendard";
    display: flex;
    flex-direction: row;
    gap: 18px;
    padding: 16px 0 ;
    padding-left: 24px;
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
    gap:2px
`;

const TextAlign = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;

const StoreDetail = ({rank, name, rate, count, time, fee}) => {
  return (
    <MainDiv>
      <img style={{borderRadius:"8px", width:"54px", height:"54px"}} src='http://placehold.co/54x54' alt="placeholder"/>
      <TextAlign>
        {(rank!==0)&&<FontBold>{rank}위</FontBold>}
        <FontBold>{name}</FontBold>
        <TextDiv>
            <img src='/img/star.svg' alt='rate'/>
            <FontLight>{rate}</FontLight>
            <FontLight>({count})</FontLight>
        </TextDiv>
        <FontLight>
            {time} · 배달비 {fee}원
        </FontLight>
      </TextAlign>
    </MainDiv>
  )
}

export default StoreDetail
