import React from "react";
import warn from "../img/warn.svg";
import styled from "styled-components";
import right_chevron from "../img/right_chevron.svg";
import plus from "../img/plus.svg";

const OrderList = ({ StoreName, MenuName, Material, Price, Count }) => {
  return (
    <>
      <OrderHeader>
        <StoresName>{StoreName}</StoresName>
        <Warning>
          최소금액 미달
          <img src={warn} alt="경고" />
        </Warning>
      </OrderHeader>
      <OrderMain>
        <StoreImg></StoreImg>
        <Description>
          <GradeStyle>{MenuName}</GradeStyle>
          <RatingStyle>{Material}</RatingStyle>
          <DeliveryStyle>{Price}</DeliveryStyle>
        </Description>
        <CountDiv>
          {Count}
          <img src={right_chevron} alt="바로가기" width="16px" height="16px" />
        </CountDiv>
      </OrderMain>
      <OrderFooter>
        더 담기
        <img src={plus} alt="더하기" />
      </OrderFooter>
    </>
  );
};

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 58px;
  align-items: center;
  padding: 0 24px;
  border-top: 16px solid #f2f4f6;
`;

const StoresName = styled.div`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Warning = styled.div`
  color: #f04452;
  text-align: right;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const OrderMain = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid lightgray;
`;

const StoreImg = styled.div`
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #ececec;
  margin: 16px 17px 0px 24px;
`;

const Description = styled.div`
  margin-top: 16px;
`;
const GradeStyle = styled.div`
  color: #333d4b;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
`;

const RatingStyle = styled.div`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
`;
const DeliveryStyle = styled.div`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;

  word-wrap: break-word;
  white-space: normal;
`;

const CountDiv = styled.div`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const OrderFooter = styled.div`
  color: #3182f6;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 59px;
  line-height: 59px;
  border-bottom: 16px solid #f2f4f6;
`;

export default OrderList;
