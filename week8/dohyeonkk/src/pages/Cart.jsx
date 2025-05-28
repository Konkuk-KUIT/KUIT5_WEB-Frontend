import React from 'react'
import styled from "styled-components"
import OrderMenu from '../components/OrderMenu';


const MainDiv = styled.div`
  font-family  : "Pretendard" ;
  width: 390px;
  p{
    margin: 0;
  }
`;

const BarDiv = styled.div`
  padding: 10px;
  background-color: white;
  height: 41px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FontBold = styled.p`
    font-weight: 600;
    font-size: 16px;
    color: #333d4b;
    margin: 0;
`;

const FontMid = styled.p`
    font-weight: 500;
    font-size: 17px;
    color: #8b95a1;
    margin: 0;
`;

const FontLight = styled.p`
    font-weight: 500;
    font-size: 17px;
    color: #505967;
    margin: 0;
`;

const StoreTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
`;


const Border = styled.div`
  background-color: #F2F4F6;
  width: 390px;
  height: 16px;
`;

const ErrorText = styled.p`
  color:#F04452;
  font-size: 15px;
  font-weight: 500;
`;


const Add = styled.div`
  width  :390px ;
  font-size: 17px;
  font-weight: 600;
  color : #3182f6;
  display: flex;
  gap:3px;
  align-items: center;
  justify-content: center;
  padding: 18px 0;
`;

const PriceBanner = styled.div`
  width: 390px;
  padding: 8px 24px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;


const BottomDiv = styled.div`
  width: 390px;
  padding-bottom:34px ;
  position: fixed;
  bottom: 0;
`;

const OrderButton = styled.form`
  font-weight: 600;
  color : #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 112px;
  margin: 0 20px;
  border-radius: 16px;
  background-color:#D0DFFB ;
`;

const MinimumPrice = styled.p`
  width: 390px;
  padding-bottom: 19px;
  color:#6b7684;
  font-size: 17px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

`;


const Cart = () => {
  return (
    <MainDiv>
      <BarDiv>
        <img style={{ margin: "10px" }} src='/img/backarrow.svg' alt='backarrow' />
        <FontBold>주문취소</FontBold>
      </BarDiv>
      <Border/>

      <StoreTitle>
        <p style={{color:"#6b7684", fontSize:"17px",fontWeight:"700"}}>샐로리 한남점</p>
        <div style={{display:"flex",flexDirection:'row', gap:"2px", alignItems:"center"}}>
          <ErrorText>최소금액 미달</ErrorText>
          <img style={{ width:"13px", height:"13px"}} src='/img/error.svg' alt='error'/>
        </div>
      </StoreTitle>

      <OrderMenu name={"토마토 샐러드"} inst={"추천소스, 채소볼, 베이컨추가, 시저드레싱 추가"} price={"10,600"} count={"1"}/>
      <Add>
        <p>더 담기 </p>
        <img style={{width:"12px", height:"12px"}} src='/img/plus.svg' alt='plus'/>
      </Add>
      <Border/>
      <div style={{height:"16px"}} />

      <PriceBanner>
        <FontMid>주문금액</FontMid>
        <FontLight>10,600원</FontLight>
      </PriceBanner>

      <PriceBanner>
        <FontMid>배달요금</FontMid>
        <FontLight>2,000원</FontLight>
      </PriceBanner>

      <PriceBanner style={{padding:"16px 24px"}}>
        <p style={{fontWeight:"500",fontSize:"17px", color:"#4E5968"}} >총 결제금액</p>
        <p style={{fontWeight:"600",fontSize:"17px", color:"#4E5968"}}>12,600원</p>
      </PriceBanner>
    
    <BottomDiv>
      <MinimumPrice>최소 주문금액 13,000원</MinimumPrice>
      <OrderButton>12,600원 결제하기</OrderButton>

    </BottomDiv>


    </MainDiv>
  )
}

export default Cart
