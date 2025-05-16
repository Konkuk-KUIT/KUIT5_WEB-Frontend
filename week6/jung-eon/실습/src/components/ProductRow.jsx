import React from "react";

const ProductRow = ({ product, onDelete, onEdit }) => {
  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}</td>
      <td>
        <button onClick={() => onDelete(product.name)}>X</button>
      </td>
      <td>
        <button onClick={() => onEdit(product.name)}>✏️</button>
      </td>
    </tr>
  );
};

export default ProductRow;
