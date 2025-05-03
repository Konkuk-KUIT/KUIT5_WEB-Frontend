import React, { useState } from "react";

const ProductRow = ({ product, onDelete, onUpdate }) => {
  //  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },

  const [edit, setEdit] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleChange = (e, f) => {
    const value = f === "stocked" ? e.target.checked : e.target.value;
    setEditedProduct((prev) => ({ ...prev, [f]: value }));
  };

  const handleSave = () => {
    onUpdate(editedProduct);
    setEdit(false);
  };

  return (
    <tr>
      <td>
        {edit ? (
          <input
            value={editedProduct.name}
            onChange={(e) => handleChange(e, "name")}
          />
        ) : (
          <span style={{ color: product.stocked ? "black" : "red" }}>
            {product.name}
          </span>
        )}
      </td>
      <td>
        {edit ? (
          <input
            value={editedProduct.price}
            onChange={(e) => handleChange(e, "price")}
          />
        ) : (
          product.price
        )}
      </td>
      <td>
        {edit ? (
          <>
            <label>
              in stock:
              <input
                type="checkbox"
                checked={editedProduct.stocked}
                onChange={(e) => handleChange(e, "stocked")}
              />
            </label>
            <button onClick={handleSave}>✅</button>
            <button onClick={() => setEdit(false)}>❎</button>
          </>
        ) : (
          <>
            <button onClick={() => setEdit(true)}>✏️</button>
            <button onClick={() => onDelete(product.name)}>❌</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default ProductRow;
