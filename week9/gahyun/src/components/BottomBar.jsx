import React from "react";
// import Button2 from "./Button";
import * as H from "../styles/Header.styles";
import styled from "styled-components";

const BottomBar = () => {
  const text = "12,600 결제하기";
  return (
    <Box>
      <H.SubText style={{ fontSize: "17px", marginBottom: "10px" }}>
        최소 주문금액 13,000원
      </H.SubText>
      <Button2 text={text} />
    </Box>
  );
};

const Button2 = ({ text }) => {
  return (
    <div>
      <ButtonForm>{text}</ButtonForm>
    </div>
  );
};

const ButtonForm = styled.form`
  display: inline-flex;
  padding: 18px 112px 16px 113px;
  width: 125px;
  height: 19px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: #d0dffb;
  color: #fff;
  cursor: pointer;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 0px 25px 38px 25px;
`;

export default BottomBar;
