import styled from "styled-components";

interface StyledButtonProps {
  actiontype?: "add" | "edit" | "delete";
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 6px 10px; /* 가로 세로 2px씩 감소 */
  margin: 4px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  ${(props) => {
    switch (props.actiontype) {
      case "add":
        return `
          background-color: #4CAF50; /* Green */
          color: white;
          &:hover {
            background-color: #45a049;
          }
        `;
      case "edit":
        return `
          background-color: #2196F3; /* Blue */
          color: white;
           &:hover {
            background-color: #0b7dda;
          }
        `;
      case "delete":
        return `
          background-color: #f44336; /* Red */
          color: white;
           &:hover {
            background-color: #da190b;
          }
        `;
      default:
        return `
          background-color: #e7e7e7; /* Grey */
          color: black;
           &:hover {
            background-color: #d5d5d5;
          }
        `;
    }
  }}
`;
