import styled from "styled-components";
import left_chevron from "../img/left_chevron.svg";

import React from "react";

interface GoBackProps {
  value?: string;
  onClick: () => void;
}

const GoBack: React.FC<GoBackProps> = ({ value, onClick }) => {
  return <button onClick={onClick}>{value}</button>;
};

const GoBackStyle = styled.div`
  display: flex;
  padding-left: 0px;
  align-items: center;
`;

const GoBackText = styled.div`
  color: #333d4b;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;

const GoBackWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
`;

export default GoBack;
