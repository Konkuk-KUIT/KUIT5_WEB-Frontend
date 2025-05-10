import React from "react";
import styled from "styled-components";
import * as H from "../styles/Header.styles";

const PriceContainer = () => {
  return (
    <>
      <PriceBox>
        <Row>
          <H.SubText style={{ color: "#8B95A1" }}>주문금액</H.SubText>
          <H.SubText style={{ color: "#505967" }}>10,600원</H.SubText>
        </Row>
        <Row>
          <H.SubText style={{ color: "#8B95A1" }}>배달요금</H.SubText>
          <H.SubText style={{ color: "#505967" }}>2,000원</H.SubText>
        </Row>
        <Row bold>
          <H.SubText style={{ color: "#4E5968", fontWeight: "600" }}>
            총 결제금액
          </H.SubText>
          <H.SubText style={{ color: "#4E5968", fontWeight: "600" }}>
            12,600원
          </H.SubText>
        </Row>
      </PriceBox>
    </>
  );
};

const PriceBox = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
`;

export default PriceContainer;
