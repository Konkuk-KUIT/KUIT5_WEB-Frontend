import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {
  // 카테고리별로 제품 그룹화
  const productsByCategory = products.reduce((acc, product) => {
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
              <ProductRow key={product.name} product={product} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductTable;
