import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({
  products,
  filterText,
  inStockOnly,
  onDelete,
  onEdit,
  onFinishEdit,
  editingProductId,
}) => {
  const rows = [];
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(filterText.toLowerCase()) &&
      (!inStockOnly || product.stocked)
    );
  });

  let lastCategory = null;
  filteredProducts
    .sort((a, b) => a.category.localeCompare(b.category))
    .forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={`category-${product.category}`}
          />
        );
      }

      rows.push(
        <ProductRow
          product={product}
          key={product.id}
          onDelete={onDelete}
          onEdit={onEdit}
          isEditing={editingProductId === product.id}
          onFinishEdit={onFinishEdit}
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
