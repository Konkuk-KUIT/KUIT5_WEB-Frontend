import React from "react";

const ProductRow = ({ product, deleteProduct }) => {
  
  const handleDeleteProduct = (product) => {
    console.log("product", product);
    deleteProduct(product);
  };

  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}</td>
      <td>
        <button
          onClick={() => handleDeleteProduct(product)}
          type={"button"}
        >
          x
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
