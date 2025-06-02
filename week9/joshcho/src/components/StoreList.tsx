import React from "react";
import styled from "styled-components";
import star from "../img/star.svg";
import { useNavigate } from "react-router-dom";

// StoreList.tsx

interface StoreProps {
  Grade: string;
  StoreName: string;
  Rating: string;
  Delivery: string;
}

const StoreList: React.FC<StoreProps> = ({
  Grade,
  StoreName,
  Rating,
  Delivery,
}) => {
  return (
    <div>
      <p>{Grade}</p>
      <p>{StoreName}</p>
      <p>{Rating}</p>
      <p>{Delivery}</p>
    </div>
  );
};

export default StoreList;

const StoreListAll = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`;

const StoreImg = styled.div`
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #ececec;
  margin: 16px 17px 0px 24px;
`;

const Description = styled.div`
  margin-top: 16px;
`;
const GradeStyle = styled.div`
  color: #333d4b;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
`;
const StoreNameStyle = styled.div`
  color: #333d4b;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
`;
const RatingStyle = styled.div`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const DeliveryStyle = styled.div`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
