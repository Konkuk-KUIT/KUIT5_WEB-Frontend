import React from "react";
import OrderBar2 from "../components/OrderBar2";
import { useNavigate } from "react-router-dom";
import { Back, Top, StoreTitle } from "../styles/StoresStyles";
import {
  Cancel,
  Border,
  MenucartTop,
  Warn,
  Count,
  Plus,
  PlusCart,
  Receipt,
  ReceiptBar,
  LastReceiptBar,
} from "../styles/CartStyles";
import {
  Salad,
  Line,
  MenuItem,
  MenuP,
  MenuD,
  MenuInfo,
} from "../styles/StoreStyles";
import { Screen } from "../styles/HomeStyles";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <Screen>
      <Top>
        <Back onClick={() => navigate(-1)}>
          <img src="/images/categories/back.svg" alt="뒤로가기" />
        </Back>
        <Cancel>주문취소</Cancel>
      </Top>

      <div className="menu-cart">
        <Border></Border>
        <MenucartTop>
          <Salad>샐로리 한남점</Salad>
          <Warn>최소금액 미달</Warn>
        </MenucartTop>
        <MenuItem>
          <img src="/images/categories/Frame.svg" />
          <MenuInfo>
            <StoreTitle>토마토 샐러드</StoreTitle>
            <MenuD>추천소스, 채소볼, 베이컨추가, 시저드레싱 추가</MenuD>
            <MenuP>10,600원</MenuP>
          </MenuInfo>
          <Count>1개</Count>
        </MenuItem>
        <Line></Line>
        <PlusCart>
          <Plus>더 담기 +</Plus>
        </PlusCart>
        <Border></Border>
      </div>
      <Receipt>
        <ReceiptBar>
          <p>주문금액</p>
          <p>10,600원</p>
        </ReceiptBar>
        <ReceiptBar>
          <p>배달요금</p>
          <p>2,000원</p>
        </ReceiptBar>
        <LastReceiptBar>
          <strong>총 결제금액</strong>
          <strong>12,600원</strong>
        </LastReceiptBar>
      </Receipt>
      <div>
        <OrderBar2 />
      </div>
    </Screen>
  );
};

export default Cart;
