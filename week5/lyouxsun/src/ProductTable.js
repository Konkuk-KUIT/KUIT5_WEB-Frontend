import React from "react";
import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, filterText, inStockOnly, deleteProduct }) => {
  const rows = [];
  let lastCategory = null;

  products
  .sort((a, b) => a.category.localeCompare(b.category))
  .map((product) => {
    if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
    }

    if(inStockOnly && !product.stocked) {
        return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategory 
            category={product.category} 
            key={product.category} 
        />
      );
    }
    
    rows.push(
        <ProductRow 
            key={product.name}  
            product={product} 
            deleteProduct={deleteProduct}
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
