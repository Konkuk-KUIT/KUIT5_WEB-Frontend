import styled from "styled-components";

export const CartCard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 24px 17px;
  box-sizing: border-box;
  height: 110px;
`;

export const CartImage = styled.div`
  width: 54px;
  height: 54px;
  position: relative;
  background: #ececec;
  border-radius: 8px;
  margin-right: 17px;
  margin-bottom: 29px;
`;

export const CartInfo = styled.div`
  width: 210px;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const CartMenuName = styled.div`
  color: #333d4b;
  font-size: 17px;
  font-family: Pretendard, serif;
  font-weight: 700;
  word-wrap: break-word;
`;

export const CartMenuIngred = styled.div`
  color: #6b7684;
  font-size: 13px;
  font-family: Pretendard, serif;
  font-weight: 500;
  word-wrap: break-word;
`;

export const CountOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 86px;
`;

export const CartMenuCount = styled.div`
  color: #6b7684;
  font-size: 15px;
  font-family: Pretendard, serif;
  font-weight: 500;
  word-wrap: break-word;
`;

export const CartMenuOption = styled.div`
    /*width: 6.63px;*/
    /*height: 11.65px;*/
    /*left: 4.70px;*/
    /*top: 2px;*/
    /*position: absolute;*/
`;
