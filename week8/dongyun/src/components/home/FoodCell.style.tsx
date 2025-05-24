import styled from "styled-components";

export const FoodCellWrapper = styled.div`
  display: flex;
  width: 108px;
  height: 74px;
  padding: 12px 0 13px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  background-color: #fafafb;
`;

export const FoodCategoryIcon = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FoodCategoryName = styled.div`
  color: #333d4b;
  text-align: center;
  font-family: Pretendard, serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
