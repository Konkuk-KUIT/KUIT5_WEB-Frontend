import { Link } from "react-router-dom";
import styled from "styled-components";

export const StoreEval = styled.h1`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: relative;
  left: 23px;
`;

export const TopMenu = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TextInfo = styled.p`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: -10px;
  color: #4e5968;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500px;
  line-height: 0px;
  margin-bottom: 4px;
`;

export const TextInfo1 = styled.p`
  display: flex;
  padding: 9px 152px 1px 24px;
  align-items: flex-start;
`;

export const Line = styled.p`
  width: 390px;
  height: 1px;
  background: #e5e8eb;
`;

export const Salad = styled.p`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: relative;
  left: 23px;
`;

export const Menu = styled.div`
  width: 390px;
  height: 110px;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
`;

export const MenuImg = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: #eee;
`;

export const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

export const MenuTitle = styled.div`
  display: flex;

  align-items: center;
  gap: 6px;
`;

export const MenuP = styled.div`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
`;

export const MenuD = styled.div`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  width: 201px;
`;

export const Badge = styled.span`
  color: #3182f6;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const MenuItem = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 12px;
`;
