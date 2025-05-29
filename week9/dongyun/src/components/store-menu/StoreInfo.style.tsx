import styled from "styled-components";

export const StoreDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  padding: 25px 24px 14px 24px;
  border-bottom: 2px solid #E5E8EB;
  box-sizing: border-box;
`;

export const StoreDetailName = styled.span`
  color: #191F28;
  font-size: 26px;
  font-family: Pretendard, serif;
  font-weight: 700;
  word-wrap: break-word;
`;

export const StoreDetailReviews = styled.span`
  padding-top: 7px;
  padding-bottom: 12px;
  color: #4E5968;
  font-size: 16px;
  font-family: Pretendard, serif;
  font-weight: 500;
  word-wrap: break-word;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const StoreDetailOrder = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 9px;
`;

export const StoreDetailOrderInfo = styled.span`
  color: #4E5968;
  font-size: 15px;
  font-family: Pretendard, serif;
  font-weight: 500;
  word-wrap: break-word;
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
