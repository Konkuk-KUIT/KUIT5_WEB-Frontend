import style from "./BottomBar.module.css";
import { useNavigate } from "react-router-dom";
const BottomBar = () => {
  const navigate = useNavigate();
  return (
    <div className={style.wrapper}>
      <div>
        <p className={style.total}>총 주문금액</p>
        <p className={style.money}>12,100원</p>
      </div>
      <button onClick={() => navigate("/cart")}>주문하기</button>
    </div>
  );
};

export default BottomBar;
