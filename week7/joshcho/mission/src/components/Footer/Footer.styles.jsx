import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 16px 24px;
  display: flex;
  justify-content: center;
  background-color: #eee;
`;

export const ResetButton = styled.button`
  padding: 8px 16px;
  background-color: #ff5252;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #e53935;
  }
`;
