import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 10px; 24px;
  display: flex;
  justify-content: center;
  background-color: #eee;
  box-sizng: border-box;
  height: 100px;
`;

export const ResetButton = styled.button`
  box-sizing: border-box;
  padding: 10px 20px;
  background-color: #ff5252;
  color: white;
  border: none;
  border-radius: 100px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #e53935;
  }
`;
