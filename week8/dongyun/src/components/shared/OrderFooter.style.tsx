import styled from "styled-components";

export const OrderFooterWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 390px;
  height: 43px;

  padding: 19px 24px;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.1);

  box-sizing: border-box;
`;

export const OrderPrice = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const TotalPriceNav = styled.span`
  color: #6b7684;
  font-family: Pretendard, serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TotalPriceAmount = styled.span`
  color: #4e5968;
  font-family: Pretendard, serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const OrderButton = styled.button`
  width: 84px;
  height: 38px;
  display: inline-flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  background: #3182f6;
  color: #fff;
`;