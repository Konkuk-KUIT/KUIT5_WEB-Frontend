import React from "react";
import { StoresData } from "../models/stores";
import BottomBar from "../components/BottomBar";
import styled from "styled-components";
import PriceContainer from "../components/PriceContainer";
import * as T from "../styles/TopBar.styles";
import * as H from "../styles/Header.styles";
import * as S from "../styles/Home.styles";
import arrowIcon from "../models/arrow.svg";
import warningIcon from "../models/warning.svg";
import StoresTemp from "../components/StoresTemp";
import plusIcon from "../models/plus.svg";

const FirstStore = () => {
  return <StoresTemp key={StoresData[0].name} stores={StoresData[0]} />;
};

const Cart = () => {
  return (
    <div>
      <S.Page>
        <div>
          <Header>
            <T.BackButton style={{ marginLeft: 0 }}>
              <img src={arrowIcon} />
            </T.BackButton>
            <H.SubText style={{ fontSize: "16px", fontWeight: "600" }}>
              주문취소
            </H.SubText>
          </Header>
          <Article>
            <Header>
              <H.SubText style={{ fontWeight: "700", color: "#6B7684" }}>
                샐로리 한남점
              </H.SubText>
              <Block>
                최소금액 미달
                {"  "}
                <img src={warningIcon} />
              </Block>
            </Header>
            <FirstStore />
            <SmallButton>
              더 담기
              {"  "}
              <img src={plusIcon} />
            </SmallButton>
          </Article>
          <PriceContainer />
        </div>
        <BottomBar />
      </S.Page>
    </div>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding: 10px 15px 10px 16px;
  margin: 0;
`;

const Article = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-top: 16px solid #f2f4f6;
  border-bottom: 16px solid #f2f4f6;
`;

const SmallButton = styled.div`
  text-align: center;
  width: 100%;
  padding: 15px 0 15px 0;
  color: #3182f6;
  font-weight: 600;
  cursor: pointer;
  border-top: 1px solid #e5e8eb;
`;

const Block = styled.div`
  display: flex;
  gap: 3px;
  color: #f04452;
  font-size: 15px;
  align-items: center;
  justify-content: center;
`;

export default Cart;
