import React, { useState } from "react";
import { ProductType } from "../routes/Products";
import Input from "./Input";
import * as S from "./ProductForm.styles";

type Props = {
  addProduct: (product: ProductType) => void;
};

const InputBar = ({ addProduct }: Props) => {
  const [newProduct, setNewProduct] = useState({
    category: "",
    price: "",
    stocked: true,
    name: "",
  });

  const handleChange = (value: string | boolean, label: string) => {
    setNewProduct((prev) => ({ ...prev, [label]: value }));
  };

  const handleAddNewProduct = () => {
    addProduct(newProduct);
  };

  return (
    <S.Form>
      <Input
        type="text"
        value={newProduct.category}
        onValueChange={(e) => handleChange(e.target.value, "category")}
        placeholder="category..."
      />
      <Input
        type="text"
        value={newProduct.name}
        onValueChange={(e) => handleChange(e.target.value, "name")}
        placeholder="name..."
      />
      <Input
        type="text"
        value={newProduct.price}
        onValueChange={(e) => handleChange(e.target.value, "price")}
        placeholder="price..."
      />
      <div>
        <label htmlFor="">Is Stocked</label>
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
