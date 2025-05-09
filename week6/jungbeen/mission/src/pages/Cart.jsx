import styled from "styled-components";
import Header from "../common/Header";
import CartList from "../common/CartList";

const Main = styled.div`
  margin: 0 auto;
  margin-top: 88px;
  min-width: 412px;
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
`;

function Cart() {
  const renderLists = () => [1, 2].map((item, idx) => <CartList />);
  return (
    <Main>
      <Header headerBtn={"주문취소"} to="/" />
      <Divider />
      <div style={{ paddingTop: "26px" }}>
        <StoreName
          style={{
            color: "#6b7684",
            fontWeight: "700",
            fontSize: "17px",
            position: "relative",
          }}
        >
          셀토리 한남점
          <NotEnough>최소금액 미달</NotEnough>
        </StoreName>
        {renderLists()}
        <div></div>
      </div>
      <Divider />
      <TotalPrice>
        <p>
          <span style={{ color: "#8b95a1" }}>주문금액</span>
          <span style={{ color: "#505967" }}>10,600원</span>
        </p>
        <p>
          <span style={{ color: "#8b95a1" }}>배달요금</span>
          <span style={{ color: "#505967" }}>2,000원</span>
        </p>
        <p>
          <span style={{ color: "#4e5968" }}>총 결제금액</span>
          <span style={{ fontWeight: "600", color: "#4e5968" }}>12,600원</span>
        </p>
      </TotalPrice>
      <PayDiv>
        <p
          style={{
            color: "#6b7684",
            textAlign: "center",
            marginBottom: "19px",
          }}
        >
          최소 주문금액 13,000원
        </p>
        <PayButton>12,600원 결제하기</PayButton>
      </PayDiv>
    </Main>
  );
}

export default Cart;
