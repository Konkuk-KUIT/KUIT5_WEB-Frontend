import styled from "styled-components";

export const Bottom = styled.div`
  display: flex;
  position: fixed;
  bottom: 0px;

  width: 390px;
  height: 111px;
  border-radius: 16px 16px 0px 0px;
  background: #fff;
  box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.1);
`;

export const OrderText = styled.h1`
  position: absolute;
  top: 16px;
  left: 24px;
  color: #6b7684;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const OrderPrice = styled.h2`
  position: absolute;
  top: 39px;
  left: 24px;
  color: #4e5968;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Bottom2 = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0px;
  width: 390px;
  height: 129px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const OrderText2 = styled.h1`
  color: #6b7684;
  text-align: center;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
