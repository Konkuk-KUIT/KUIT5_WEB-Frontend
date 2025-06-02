import React from "react";

const ProductRow = ({ product, deleteProduct }) => {
  // { category: "Fruits", price: "$1", stocked: true, name: "Apple" }
  // const handleEdit = (value, label) => {};
  const handleDelete = () => {
    deleteProduct(product);
  };

  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}</td>
      <button onClick={handleDelete}>delete</button>
      {/* <button onClick={handleEdit}>edit</button> */}
    </tr>
  );
};

export default ProductRow;
