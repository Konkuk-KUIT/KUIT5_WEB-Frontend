import React, { JSX } from "react";
import { ProductType } from "../routes/Products";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

type Props = {
  products: ProductType[];
  deleteProduct: (product: ProductType) => void;
  updateProduct: (prevProduct: ProductType, newProduct: ProductType) => void;
};

const ProductTable = ({ products, deleteProduct, updateProduct }: Props) => {
  const productsByCategory = products.reduce((acc: { [key: string]: ProductType[] }, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(productsByCategory).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {productsByCategory[category].map((product) => (
              <ProductRow
                key={product.name}
                product={product}
                deleteProduct={deleteProduct}
                updateProduct={updateProduct}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductTable;
