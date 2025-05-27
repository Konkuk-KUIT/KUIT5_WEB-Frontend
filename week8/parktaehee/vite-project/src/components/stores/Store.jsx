import style from "./Store.module.css";
import { useNavigate } from "react-router-dom";

const Store = ({
  name,
  rank,
  rating,
  reviews,
  deliveryTime,
  deliveryFee,
  index,
  onEdit,
  onDelete,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/store");
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    onEdit && onEdit();
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onDelete && onDelete();
    }
  };

  return (
    <div className={style.wrapper} onClick={handleClick}>
      <div className={style.img}></div>
      <div className={style.info}>
        <p className={style.rank}>{rank}위</p>
        <p className={style.name}>
          {name} <span className={style.best}>{index === 0 ? "BEST" : ""}</span>
        </p>
        <p className={style.star}>
          <img src="assets/star.svg" alt="별점" />
          {rating} ({reviews.toLocaleString()})
        </p>
        <p className={style.time}>
          {deliveryTime} • 배달비 {deliveryFee.toLocaleString()}원
        </p>

        <div className={style.actions}>
          <button onClick={handleEditClick}>수정</button>
          <button onClick={handleDeleteClick}>삭제</button>
        </div>
      </div>
    </div>
  );
};

export default Store;
