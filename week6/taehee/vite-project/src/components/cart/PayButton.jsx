import style from "./PayButton.module.css";
const PayButton = ({ minOrder, total }) => {
  return (
    <div className={style.wrapper}>
      <span className={style.minOrder}>
        최소 주문금액 {minOrder.toLocaleString()}원
      </span>
      <button className={style.pay}>{total}원 결제하기</button>
    </div>
  );
};

export default PayButton;
