import React, { useState } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, filterText, inStockOnly, setProducts }) => {
  const rows = [];
  let lastCategory = null;

  products
    .sort((a, b) => {
      if (a.category > b.category) return 1;
      else if (a.category < b.category) return -1;
      else return 0;
    })
    .map((product) => {
      if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
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
          setProducts={setProducts}
          key={product.name}
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
