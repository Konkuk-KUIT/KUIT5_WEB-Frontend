import styled from "styled-components";

//category 전체 css
export const CategoryForm = styled.div`
  display: grid;
  width: 342px;
  height: 326px;
  grid-template-rows: repeat(4, 74px);
  grid-template-columns: repeat(3, 108px);
  gap: 9px;
`;

//개별 아이템 css
export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 35px 13px 36px;
  margin: 5px;
  gap: 4px;
  border-radius: 8px;
  background-color: #fafafb;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
`;
