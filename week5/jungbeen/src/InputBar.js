import React, { useState } from "react";

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
    <form>
      <input
        type="text"
        value={newProduct.category}
        onChange={(e) => handleChange(e.target.value, "category")}
        placeholder="category..."
      />
      <input
        type="text"
        value={newProduct.price}
        onChange={(e) => handleChange(e.target.value, "price")}
        placeholder="price..."
      />
      <label>Is Stocked</label>
      <input
        type="checkbox"
        checked={newProduct.stocked}
        onChange={(e) => handleChange(e.target.checked, "stocked")}
      />
      <input
        type="text"
        value={newProduct.name}
        onChange={(e) => handleChange(e.target.value, "name")}
        placeholder="name..."
      />
      <button onClick={handleAddNewProduct} type="button">
        add new product
      </button>
    </form>
  );
};

export default InputBar;
