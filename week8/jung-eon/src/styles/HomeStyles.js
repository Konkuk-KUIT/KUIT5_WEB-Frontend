import styled from "styled-components";

export const Screen = styled.div`
  width: 390px;
  height: 844px;
  background: #fff;
`;

export const Title = styled.h1`
  position: relative;
  left: 24px;
  color: #191f28;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SubTitle = styled.h2`
  position: relative;
  left: 24px;
  color: #333d4b;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3열 바둑판
  gap: 16px;
  padding: 20px;
`;

export const CategoryItem = styled.div`
  display: flex;
  width: 108px;
  height: 74px;
  padding: 12px 0px 13px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  background: #fafafb;
`;

export const CategoryIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-top: 20px;
`;

export const CategoryName = styled.p`
  color: #333d4b;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
