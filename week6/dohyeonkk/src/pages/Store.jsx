import React from 'react'
import TitleBar from '../components/TitleBar'
import Orderbar from '../components/Orderbar'
import styled from "styled-components"
import MenuInst from '../components/MenuInst'

const MainDiv = styled.div`
  font-family  : "Pretendard" ;
  width: 390px;
  margin-bottom: 77px;
`;

const FontBold = styled.p`
    font-weight: 600;
    font-size: 17px;
    color: #333d3b;
    margin: 0;
`;
const FontLight = styled.p`
    color:#4e5968;
    font-size: 15px;
    font-weight: 500;
    margin: 0;
`;

const Inst = styled.div`
    padding: 0 24px;
    padding-top: 9px;
    display: flex;
    flex-direction: row;
    gap: 12px;

`;

const MenuType = styled.p`
    font-weight: 600;
    font-size: 17px;
    color: #6b7684;
    padding-left: 24px;
    padding-bottom: 11px;
`;



const Store = () => {
    return (
        <MainDiv>
            <div style={{ height: "41px" }}>
                <img style={{ margin: "10px" }} src='/img/backarrow.svg' alt='backarrow' />
            </div>
            <TitleBar text={"샐로리 한남점"} />
            <Inst style={{ gap: "5px", paddingBottom: "9px" }}>
                <img src='/img/yellowstart.svg' alt='rate' />
                <FontBold>4.9</FontBold>
                <FontLight style={{ fontSize: "16px" }}>리뷰3,919</FontLight>
            </Inst>

            <Inst>
                <FontLight>결제방법</FontLight>
                <FontLight>토스결제만 현장결제 안됨</FontLight>
            </Inst>
            <Inst>
                <FontLight>최소주문</FontLight>
                <FontLight>13,000원</FontLight>
            </Inst>
            <Inst>
                <FontLight>배달시간</FontLight>
                <FontLight>약 15-25분</FontLight>
            </Inst>
            <hr style={{ marginTop: "15px", border: 'none', height: "1px", backgroundColor: "#ccc" }} />

            <MenuType>샐러드</MenuType>

            <MenuInst menu={"토마토 샐러드"} best={1} price={"7,600"} inst={"계란, 옥수수, 양파, 올리브, 베이컨, 시저드레싱"} />
            <MenuInst menu={"시저 샐러드"} best={0} price={"6,900"} inst={"로메인 상추와 크루통이며, 달걀, 올리브유, 레몬 즙, 마늘"} />
            <MenuInst menu={"리코타치즈 샐러드"} best={0} price={"6,900"} inst={"리코타치즈, 양상추, 베이비채소, 방울토마토, 블랙올리브"} />
            <MenuInst menu={"탄단지 샐러드"} best={0} price={"7,600"} inst={"치킨, 고구마, 견과류, 크랜배리, 오리엔탈"} />
            <MenuInst menu={"연어 샐러드"} best={0} price={"9,800"} inst={"훈제연어 슬라이스, 양상추, 베이비채소, 양파, 케이퍼"} />
            <MenuInst menu={"우삼겹 메밀면 샐러드"} best={0} price={"8,900"} inst={"우삼겹, 메밀면, 오이, 양상추, 호두, 옥수수, 참께 드레싱"} />


            <Orderbar />
        </MainDiv>
    )
}

export default Store
