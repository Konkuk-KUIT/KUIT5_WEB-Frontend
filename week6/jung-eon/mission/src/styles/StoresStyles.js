import styled from "styled-components";

export const Top = styled.div`
  width: 390px;
  height: 41px;
  display: flex;
  flex-direction: row;
  gap: 285px;
  position: relative;
  background: #fff;
`;

export const Back = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 10px;
  top: 7px;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;

  background: #fff;
`;

export const MarketList = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Market = styled.div`
  width: 390px;
  height: 116px;
  position: relative;
`;

export const CategoryImg = styled.img`
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  position: absolute;
  left: 24px;
  top: 16px;
`;

export const StoreInfo = styled.div`
  position: absolute;
  left: 95px;
  top: 16px;
`;

export const StoreTitle = styled.div`
  color: #333d4b;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const StoreSubTitle = styled.div`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
