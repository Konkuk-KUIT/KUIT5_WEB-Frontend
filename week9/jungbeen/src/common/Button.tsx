import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #3182f6;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  color: white;
  cursor: pointer;
`;

type ButtonProps = {
  value: string;
  className?: string;
};
function Button({ value, className }: ButtonProps) {
  return <StyledButton className={className}>{value}</StyledButton>;
}

export default Button;
