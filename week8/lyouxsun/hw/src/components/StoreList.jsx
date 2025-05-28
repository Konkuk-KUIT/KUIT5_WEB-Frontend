import React from "react";
import styled from "styled-components";

const StoreList = ({
  Grade, StoreName, Rating, Delivery,
  isEditing = false, form, onChange, onSubmit, onCancel
}) => {
  if (isEditing) {
    return (
      <form onSubmit={onSubmit}>
        <input name="Grade" value={form.Grade} onChange={onChange} />
        <input name="StoreName" value={form.StoreName} onChange={onChange} />
        <input name="Rating" value={form.Rating} onChange={onChange} />
        <input name="Delivery" value={form.Delivery} onChange={onChange} />
        <button type="submit">수정 완료</button>
        <button type="button" onClick={onCancel}>취소</button>
      </form>
    );
  }
  return (
    <StoreListAll>
      <StoreImg></StoreImg>
      <Description>
        <GradeStyle>{Grade}</GradeStyle>
        <StoreNameStyle>{StoreName}</StoreNameStyle>
        <RatingStyle>
          <img src="/assets/star.svg" alt="별" />
          {Rating}
        </RatingStyle>
        <DeliveryStyle>{Delivery}</DeliveryStyle>
      </Description>
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

export default StoreList;
