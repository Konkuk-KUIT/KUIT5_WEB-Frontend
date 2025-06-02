import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "./Button";

const Bar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 16px 16px 0 0;
  padding: 16px 24px;
  height: 111px;
  box-sizing: border-box;
  max-width: 1080px;
  margin: 0 auto;
  background-color: white;

  & > .totalIndex {
    font-size: 15p;
    margin-bottom: 5px;
    color: #6b7684;
  }

  & > .totalPrice {
    font-size: 17px;
  }
`;

const FixedButton = styled(Button)`
  position: absolute;
  right: 24px;
  top: 19px;
`;

function OrderBar({ total = 0, className }) {
  return (
    <Bar className={className}>
      <p className="totalIndex">총 주문금액</p>
      <p className="totalPrice">{total.toLocaleString()}원</p>
      <Link to={"/cart"}>
        <FixedButton value="주문하기" />
      </Link>
    </Bar>
  );
}
export default OrderBar;
