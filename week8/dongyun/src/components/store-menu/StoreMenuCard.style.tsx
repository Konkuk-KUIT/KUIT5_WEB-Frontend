import styled from "styled-components";

export const StoreMenuCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 390px;
  height: 110px;
  padding: 16px 24px 17px;
  box-sizing: border-box;
`;

export const StoreMenuImage = styled.div`
  width: 54px;
  height: 54px;
  position: relative;
  background: #ececec;
  border-radius: 100%;
  margin-right: 17px;
  margin-bottom: 29px;
`;

export const StoreMenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  flex: 1;
`;

export const StoreMenuName = styled.span`
  color: #333d4b;
  font-size: 17px;
  font-family: Pretendard, serif;
  font-weight: 600;
  word-wrap: break-word;
`;

export const StoreMenuIsBest = styled.span`
  color: #3182f6;
  font-size: 17px;
  font-family: Pretendard, serif;
  font-weight: 600;
  word-wrap: break-word;
  margin-left: 6px;
`;

export const StoreMenuPrice = styled.span`
  color: #6b7684;
  font-size: 13px;
  font-family: Pretendard, serif;
  font-weight: 500;
  word-wrap: break-word;
`;

export const StoreMenuIngred = styled.span`
  color: #6b7684;
  font-size: 13px;
  font-family: Pretendard, serif;
  font-weight: 500;
  word-wrap: break-word;
`;

export const AddToCart = styled.button`
  width: 52px;
  height: 32px;
  display: inline-flex;
  padding: 8px 14px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  background: #3182f6;
  color: #fff;
  font-size: 13px;
  font-family: Pretendard, serif;
  font-weight: 500;
  word-wrap: break-word;
  cursor: pointer;
`;
