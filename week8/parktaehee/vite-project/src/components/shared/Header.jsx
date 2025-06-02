import style from "./Header.module.css";
import { useNavigate, useLocation } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className={style.wrapper}>
      <img
        className={style.img}
        onClick={handleGoBack}
        src="/assets/leftarrow.svg"
      ></img>
      <p className={style.cancel}>
        {location.pathname === "/cart" ? "주문취소" : ""}
      </p>
    </div>
  );
};

export default Header;
