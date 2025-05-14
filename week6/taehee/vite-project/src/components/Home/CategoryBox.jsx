import style from "./CategoryBox.module.css";
import { useNavigate } from "react-router-dom";

const CategoryBox = ({ name, image }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (name == "샐러드") {
      navigate("/stores");
    }
  };
  return (
    <div className={style.box} onClick={handleClick}>
      <img src={image} alt={name} className={style.img}></img>
      <p className={style.name}>{name}</p>
    </div>
  );
};

export default CategoryBox;
