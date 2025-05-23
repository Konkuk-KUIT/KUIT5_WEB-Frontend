import React, { useState } from "react";

// const InputBar = ({ addProduct, deleteProduct }) => {
const InputBar = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({
    category: "",
    price: "",
    stocked: true,
    name: "",
  });

  const handleChange = (value, label) => {
    setNewProduct((prev) => ({ ...prev, [label]: value }));
  };

  const handleAddNewProduct = () => {
    addProduct(newProduct);
  };

  // const handleRemoveProduct = () => {
  //   deleteProduct(newProduct);
  // };

  return (
    <form>
      <input
        type={"text"}
        value={newProduct.category}
        onChange={(e) => handleChange(e.target.value, "category")}
        // onChange={(e) => setNewProduct({ ...newProduct, category: "fsfkeslj" })}
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
        placeholder="price..."
      />
      <input
        type={"text"}
        value={newProduct.name}
        onChange={(e) => handleChange(e.target.value, "name")}
        placeholder="name..."
      />
      <button onClick={handleAddNewProduct} type={"button"}>
        {/* type=button 이 없을 경우 버튼을 누르면 새로고침 됨*/}
        add new product
      </button>
      {/* 삭제 버튼 */}
      {/* <button onClick={handleRemoveProduct} type={"button"}>
        delete product
      </button> */}
    </form>
  );
};

export default InputBar;
