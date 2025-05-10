import React, { useState } from "react";

const InputBar = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({
    category: "",
    prict: "",
    name: "", // Q. 왜 마지막 요소에도 쉼표를 붙여주는 건가요?
  });

  const handleChange = (value, label) => {
    setNewProduct((prev) => ({ ...prev, [label]: value }));
  };

  const handleAddNewProduct = () => {
    addProduct(newProduct);
  };

  return (
    <form>
      <input
        type={"text"}
        value={newProduct.category}
        onChange={(e) => handleChange(e.target.value, "category")}
        placeholder="category..."
      />

      <input
        type={"text"}
        value={newProduct.price}
        onChange={(e) => handleChange(e.target.value, "price")}
        placeholder="price..."
      />

      <label>Is Stocked</label>

      <input
        type={"checkbox"}
        value={newProduct.stocked}
        onChange={(e) => handleChange(e.target.checked, "stocked")}
      />

      <input
        type={"text"}
        value={newProduct.name}
        onChange={(e) => handleChange(e.target.value, "name")}
        placeholder="name..."
      />
      <button onClick={handleAddNewProduct} type={"button"}>
        add new product
      </button>
    </form>
  );
};

export default InputBar;
