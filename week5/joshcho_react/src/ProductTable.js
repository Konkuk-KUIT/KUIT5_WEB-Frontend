import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({
  products,
  filterText,
  inStockOnly,
  deleteProduct,
  updateProduct,
}) => {
  const rows = [];
  let lastCategory = null;

  products
    .sort((a, b) => a.category > b.category)
    .map((product) => {
      if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) == -1) {
        return;
      }

      if (inStockOnly && !product.stocked) {
        return;
      }

      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            key={product.category}
            category={product.category}
          />
        );
      }

      rows.push(
        <ProductRow
          product={product}
          key={product.name}
          onDelete={deleteProduct}
          onUpdate={updateProduct}
        />
      );

      lastCategory = product.category;
    });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
