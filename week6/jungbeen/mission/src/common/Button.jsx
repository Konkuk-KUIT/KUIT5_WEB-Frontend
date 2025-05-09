import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #3182f6;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  color: white;
`;

function Button({ value, className }) {
  return <StyledButton className={className}>{value}</StyledButton>;
}

export default Button;
