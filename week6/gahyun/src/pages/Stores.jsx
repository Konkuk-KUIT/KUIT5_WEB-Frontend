import React from "react";
import StoresList from "../components/StoresList";
import OrderBar from "../components/OrderBar";
import * as T from "../styles/TopBar.styles";
import * as H from "../styles/Header.styles";
import * as S from "../styles/Home.styles";
import starIcon from "../models/star.svg";
import styled from "styled-components";
import arrowIcon from "../models/arrow.svg";

const Article = () => {
  return (
    <div>
      <ReviewText>
        <img src={starIcon} />
        <span
          style={{
            fontSize: "17px",
            fontWeight: "600",
            color: "#4E5968",
          }}
        >
          {" "}
          4.9{" "}
        </span>
        <span
          style={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#4E5968",
          }}
        >
          리뷰3,919
        </span>
      </ReviewText>
      <Text>
        <div>결제방법</div>
        <div>토스결제만 현장결제 안됨</div>
        <div>최소 주문</div>
        <div>13,000원</div>
        <div>배달시간</div>
        <div>약 15-25분</div>
      </Text>
    </div>
  );
};

const Stores = () => {
  return (
    <div>
      <S.Page>
        <S.HeaderWrapper style={{ height: 50 }}>
          <T.Header>
            <T.BackButton>
              <img src={arrowIcon} />
            </T.BackButton>
          </T.Header>
        </S.HeaderWrapper>
        <S.ScrollArea>
          <T.Title>
            <H.MainText>샐로리 한남점</H.MainText>
          </T.Title>
          <Article />
          <T.Title>
            <H.NormalText style={{ fontSize: "17px" }}>샐러드</H.NormalText>
          </T.Title>
          <StoresList />
        </S.ScrollArea>
        <OrderBar />
      </S.Page>
    </div>
  );
};

const Text = styled.div`
  display: grid;
  height: 89px;
  grid-template-rows: repeat(3, 18px);
  grid-template-columns: repeat(1, 100px) repeat(1, 200px);
  gap: 9px;
  padding: 9px 0 9px 24px;
  border-bottom: 1px solid #e5e8eb;
  color: #4e5968;
  font-size: 15px;
`;

const ReviewText = styled.div`
  padding: 10px 0 12px 24px;
`;

export default Stores;
