import React from "react";
import styles from "./style.module.css";
import "remixicon/fonts/remixicon.css";
import { useState } from "react";

const ProductRow = ({ product, onDelete, onEdit, isEditing, onFinishEdit }) => {
  const [editedName, setEditedName] = useState(product.name);
  const [editedPrice, setEditedPrice] = useState(product.price);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onFinishEdit({ ...product, name: editedName, price: editedPrice });
    }
  };

  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>
        {isEditing ? (
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        ) : (
          product.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedPrice}
            onChange={(e) => setEditedPrice(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        ) : (
          product.price
        )}
      </td>
      <td>
        <button className={styles.func_div} onClick={() => onEdit(product)}>
          {" "}
          <i className={`ri-edit-line ${styles.edit}`}></i>
        </button>
        <button className={styles.func_div} onClick={() => onDelete(product)}>
          {" "}
          <i className={`ri-close-fill ${styles.delete}`}></i>
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
