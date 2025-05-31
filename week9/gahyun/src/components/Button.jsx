import styled from "styled-components";
import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <ButtonForm>
        <StyledButton>{text}</StyledButton>
      </ButtonForm>
    </div>
  );
};

const ButtonForm = styled.form`
  display: inline-flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #3182f6;
  color: #fff;
`;

const StyledButton = styled.button`
  all: unset; /* 기본 버튼 스타일 제거 */
  font-size: 16px;
  font-weight: 500;
  color: white;
  cursor: pointer;

  /*폰트 스타일 설정*/
  text-align: center;
  font-size: 15px;
  font-style: normal;
  line-height: normal;
`;

export default Button;
