import React from "react";

const DeleteProductRow = ({ product, deleteProduct }) => {
  const handleDeleteProduct = () => {
    deleteProduct(product); // 해당 제품 객체 넘겨줌
  };

  return (
    <button onClick={handleDeleteProduct} type="button">
      ❌
    </button>
  );
};

export default DeleteProductRow;
