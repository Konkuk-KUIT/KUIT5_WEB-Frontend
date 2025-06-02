import React from "react";
import StoreList from "../components/StoreList";
import OrderBar from "../components/OrderBar";
import * as T from "../styles/TopBar.styles";
import * as H from "../styles/Header.styles";
import * as S from "../styles/Home.styles";
import arrowIcon from "../models/arrow.svg";

const Store = () => {
  return (
    <S.Page>
      <S.HeaderWrapper>
        <T.Header>
          <T.BackButton>
            <img src={arrowIcon} />
          </T.BackButton>
          <T.Title>
            <H.MainText>샐러드</H.MainText>
          </T.Title>
        </T.Header>
      </S.HeaderWrapper>
      <S.ScrollArea>
        <StoreList />
      </S.ScrollArea>
      <OrderBar />
    </S.Page>
  );
};

export default Store;
