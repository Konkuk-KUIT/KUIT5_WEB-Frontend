import React from "react";

const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan={4}>{category}</th>
    </tr>
  );
};

export default ProductCategoryRow;
