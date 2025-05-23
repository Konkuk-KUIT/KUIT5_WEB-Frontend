import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 58px;
  padding: 16px 0;
`;

export const BackButton = styled.div`
  cursor: pointer;
  margin-left: 16px;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Title = styled.div`
  padding: 26px 298px 2px 24px;
  white-space: nowrap; /*공백제거*/
`;
