import React, { useState } from "react";
import Input from "./input";
import * as S from "./ProductForm.styles";

const InputBar = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({
    category: "",
    price: "",
    stocked: false,
    name: "",
  });

  const handleChange = (value, label) => {
    setNewProduct((prev) => ({ ...prev, [label]: value }));
  };

  const handleAddNewProduct = () => {
    addProduct(newProduct);
    setNewProduct({
      category: "",
      price: "",
      stocked: false,
      name: "",
    });
  };
  return (
    <S.Form>
      <Input
        type="text"
        value={newProduct.category}
        onChange={(e) => handleChange(e.target.value, "category")}
        placeholder="category..."
      />
      <Input
        type="text"
        value={newProduct.price}
        onChange={(e) => handleChange(e.target.value, "price")}
        placeholder="price..."
      />

      <Input
        type="text"
        value={newProduct.name}
        onChange={(e) => handleChange(e.target.value, "name")}
        placeholder="name..."
      />
      <div>
        <label>Is Stocked</label>
        <input
          type="checkbox"
          checked={newProduct.stocked}
          onChange={(e) => handleChange(e.target.checked, "stocked")}
        />
      </div>
      <button onClick={handleAddNewProduct} type="button">
        add new product
      </button>
    </S.Form>
  );
};

export default InputBar;
