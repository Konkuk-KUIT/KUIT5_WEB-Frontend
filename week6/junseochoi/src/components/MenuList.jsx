import React from "react";
import styled from "styled-components";
import Button from "./Button";

const MenuList = ({ MenuName, Price, Material }) => {
  return (
    <StoreListAll>
      <StoreImg></StoreImg>
      <Description>
        <GradeStyle>{MenuName}</GradeStyle>
        <RatingStyle>{Price}</RatingStyle>
        <DeliveryStyle>{Material}</DeliveryStyle>
      </Description>
      <ButtonDiv>
        <Button value="담기" width="52px" height="32px" />
      </ButtonDiv>
    </StoreListAll>
  );
};

const StoreListAll = styled.div`
  width: 100%;
  height: 116px;
  display: flex;
`;

const StoreImg = styled.div`
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 27px;
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

  word-wrap: break-word;
  white-space: normal;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
`;

export default MenuList;
