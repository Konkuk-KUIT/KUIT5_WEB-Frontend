import styled from "styled-components";
import Header from "../common/Header";
import CartList from "../common/CartList";

const Main = styled.div`
  margin: 0 auto;
  margin-top: 88px;
  max-width: 1080px;
  padding: 0 24px;
  margin-bottom: 100px;
`;
const Divider = styled.div`
  height: 16px;
  background-color: #f2f4f6;
  margin: 0 -50px;
`;
const StoreName = styled.p`
  color: #6b7684;
  font-weight: 700;
  font-size: 17px;
  position: relative;
`;
const NotEnough = styled.span`
  color: #f04452;
  font-weight: 500;
  font-size: 15px;
  position: absolute;
  right: 0;
`;
const TotalPrice = styled.div`
  padding-top: 16px;
  & p {
    display: flex;
    justify-content: space-between;
    line-height: 38px;
  }
  & span {
    font-size: 17px;
  }
  & .priceIndex {
    color: #8b95a1;
  }
  & .price {
    color: #505967;
  }
  & .totalPrice {
    color: #4e5968;
  }
  & .weightPrice {
    font-weight: 600;
  }
`;
const PayButton = styled.button`
  background-color: #d0dffb;
  border: none;
  border-radius: 16px;
  height: 56px;
  color: white;
  width: 100%;
`;
const PayDiv = styled.div`
  position: fixed;
  bottom: 34px;
  right: 24px;
  left: 24px;

  & > p {
    color: #6b7684;
    text-align: center;
    margin-bottom: 19px;
  }
`;
const OrderedMenu = styled.div`
  padding-top: 26px;
`;

function Cart() {
  const renderLists = () => [1, 2].map((item, idx) => <CartList />);
  return (
    <Main>
      <Header headerBtn={"주문취소"} to="/" />
      <Divider />
      <OrderedMenu>
        <StoreName>
          셀토리 한남점
          <NotEnough>최소금액 미달</NotEnough>
        </StoreName>
        {renderLists()}
        <div></div>
      </OrderedMenu>
      <Divider />
      <TotalPrice>
        <p>
          <span className="priceIndex">주문금액</span>
          <span className="price">10,600원</span>
        </p>
        <p>
          <span className="priceIndex">배달요금</span>
          <span className="price">2,000원</span>
        </p>
        <p>
          <span className="totalprice">총 결제금액</span>
          <span className="totalprice weightPrice">12,600원</span>
        </p>
      </TotalPrice>
      <PayDiv>
        <p>최소 주문금액 13,000원</p>
        <PayButton>12,600원 결제하기</PayButton>
      </PayDiv>
    </Main>
  );
}

export default Cart;
