import styled from "styled-components";

export const StoreCard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 24px 17px 0px;
  height: auto;
  max-height: 116px;
  box-sizing: border-box;
  margin: 0;
`;

export const StoreImage = styled.div`
  width: 54px;
  height: 54px;
  position: relative;
  background: #ececec;
  border-radius: 8px;
  margin-right: 17px;
  margin-bottom: 3px;
`;

export const StoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  height: 100%;
`;

export const StoreRank = styled.div`
  color: #333d4b;
  font-size: 17px;
  font-family: Pretendard, serif;
  font-weight: 600;
  word-wrap: break-word;
`;

export const StoreName = styled.div`
  color: #333d4b;
  font-size: 17px;
  font-family: Pretendard, serif;
  font-weight: 600;
  word-wrap: break-word;
`;

export const StoreReviews = styled.div`
  color: #6b7684;
  font-size: 13px;
  font-family: Pretendard, serif;
  font-weight: 500;
  word-wrap: break-word;
`;

export const StoreDelivery = styled.div`
  color: #6b7684;
  font-size: 13px;
  font-family: Pretendard, serif;
  font-weight: 500;
  word-wrap: break-word;
`;
