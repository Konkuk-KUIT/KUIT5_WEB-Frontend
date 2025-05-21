import React from "react";
import styled from "styled-components";
import starIcon from "../models/star.svg";
import * as H from "../styles/Header.styles";

// img: "https://placehold.co/30x30",
// rank: "1",
// name: "샐로리 한남점",
// rating: 4.9,
// reviews: 3919,
// devliveryTime: "13분~30분",
// deliveryFee: 2000,

const StoreDetail = ({ store }) => {
  return (
    <StoreData>
      <StoreImg>
        <img src={store.img} alt={store.name} style={{ borderRadius: "8px" }} />
      </StoreImg>
      <StoreText>
        <H.SubText>{store.rank === "0" ? "" : `${store.rank}위`}</H.SubText>
        <H.SubText>{store.name}</H.SubText>
        <H.NormalText>
          <img src={starIcon} /> {store.rating} (
          {store.reviews.toLocaleString()})
        </H.NormalText>
        <H.NormalText>
          {store.deliveryTime} · 배달비 {store.deliveryFee.toLocaleString()}원
        </H.NormalText>
      </StoreText>
    </StoreData>
  );
};

const StoreData = styled.div`
  margin: 13px 13px 13px 13px;
  display: flex;
  height: 116px;
`;

const StoreText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 16px 0px 16px 5px;
`;

const StoreImg = styled.div`
  margin: 16px 16px 46px 24px;
  border-radius: 8px;
`;

export default StoreDetail;
