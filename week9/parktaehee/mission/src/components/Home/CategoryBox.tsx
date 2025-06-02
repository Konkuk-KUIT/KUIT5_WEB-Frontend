import style from "./CategoryBox.module.css";
import { useNavigate } from "react-router-dom";

interface CategoryBoxProps {
  name: string;
  image: string;
}

const CategoryBox = ({ name, image }: CategoryBoxProps) => {
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
