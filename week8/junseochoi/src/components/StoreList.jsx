import React from "react";
import styled from "styled-components";
import star from "../img/star.svg";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const StoreList = ({
  Id,
  Grade,
  StoreName,
  Rating,
  Delivery,
  deleteStoresList,
}) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteStoresList(Id);
  };

  const handleClick = () => {
    navigate("/store/1");
  };

  return (
    <StoreListAll>
      <ListDiv onClick={handleClick}>
        <StoreImg></StoreImg>
        <Description>
          <GradeStyle>{Grade}</GradeStyle>
          <StoreNameStyle>{StoreName}</StoreNameStyle>
          <RatingStyle>
            <img src={star} alt="별" />
            {Rating}
          </RatingStyle>
          <DeliveryStyle>{Delivery}</DeliveryStyle>
        </Description>
      </ListDiv>
      <ButtonPosition>
        <Button value="수정" width="52px" heigh="32px" />
        <Button value="삭제" width="52px" heigh="32px" onClick={handleDelete} />
      </ButtonPosition>
    </StoreListAll>
  );
};

const StoreListAll = styled.div`
  width: 100%;
  height: 116px;
  display: flex;
  justify-content: space-between;
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

const ButtonPosition = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  margin: 15px 30px 0 0;
`;

const ListDiv = styled.div`
  display: flex;
`;

export default StoreList;
