import React, { useState } from "react";
import { ProductType } from "./App";

type Props = {
  product: ProductType;
  deleteProduct: (product: ProductType) => void;
  updateProduct: (prevProduct: ProductType, newProduct: ProductType) => void;
};

const ProductRow = ({ product, deleteProduct, updateProduct }: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedName, setEditedName] = useState<string>(product.name);
  const [editedPrice, setEditedPrice] = useState<string>(product.price);

  const handleSave = () => {
    const newProduct: ProductType = {
      category: product.category,
      price: editedPrice,
      name: editedName,
      stocked: product.stocked,
    };
    updateProduct(product, newProduct);
    setIsEditing(false);
  };

  const handleUpdate = () => {
    setIsEditing(true);
  };
  return (
    <tr>
      <td id="productName" style={{ color: product.stocked ? "black" : "red" }}>
        {isEditing ? (
          <input value={editedName} onChange={(e) => setEditedName(e.target.value)} />
        ) : (
          product.name
        )}
      </td>
      <td id="productPrice">
        {isEditing ? (
          <input value={editedPrice} onChange={(e) => setEditedPrice(e.target.value)} />
        ) : (
          product.price
        )}
      </td>
      <td>
        <button onClick={() => deleteProduct(product)}>삭제</button>
        {isEditing ? (
          <button onClick={handleSave}>저장</button>
        ) : (
          <button onClick={handleUpdate}>수정</button>
        )}
      </td>
    </tr>
  );
};

export default ProductRow;
