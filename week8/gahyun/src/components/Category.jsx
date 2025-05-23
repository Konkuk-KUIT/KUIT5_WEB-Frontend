import React from "react";
import * as C from "../components/Category.styles";

const Category = ({ image, label }) => {
  return (
    <C.CategoryItem>
      <img src={image} />
      <p style={{ margin: 0, fontSize: 14 }}>{label}</p>
    </C.CategoryItem>
  );
};

export default Category;
