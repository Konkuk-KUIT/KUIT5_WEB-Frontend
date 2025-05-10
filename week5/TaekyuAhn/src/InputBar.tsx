import React, { useState } from "react";
import { ProductType } from "./App";

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
    <form action="">
      <input
        type="text"
        value={newProduct.category}
        onChange={(e) => handleChange(e.target.value, "category")}
        placeholder="category..."
      />
      <input
        type="text"
        value={newProduct.name}
        onChange={(e) => handleChange(e.target.value, "name")}
        placeholder="name..."
      />
      <input
        type="text"
        value={newProduct.price}
        onChange={(e) => handleChange(e.target.value, "price")}
        placeholder="price..."
      />
      <label htmlFor="">Is Stocked</label>
      <input
        type="checkbox"
        checked={newProduct.stocked}
        onChange={(e) => handleChange(e.target.checked, "stocked")}
      />
      <button onClick={handleAddNewProduct} type="button">
        add new product
      </button>
    </form>
  );
};

export default InputBar;
