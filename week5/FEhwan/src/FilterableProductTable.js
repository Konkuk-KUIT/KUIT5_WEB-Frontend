import React, { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import InputBar from './InputBar';

const FilterableProductTable = ({ initialProducts, setProducts }) => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  // 기존 상품 데이터로 초기화
  const [products, setProductsState] = useState(initialProducts);

  // 새 상품 추가 또는 수정
  const addProduct = (product) => {
    if (product.id) {
      // 수정 모드
      setProductsState((prev) =>
        prev.map((p) => (p.id === product.id ? product : p)) // 수정
      );
    } else {
      // 새 상품 추가
      setProductsState((prev) => [...prev, { ...product, id: Date.now() }]);
    }
  };

  // 상품 삭제
  const handleDeleteProduct = (productToDelete) => {
    // 해당 id를 가진 상품만 삭제하고 나머지는 그대로 유지
    setProductsState((prev) => {
      return prev.filter((product) => product.id !== productToDelete.id);
    });
  };

  // 상품 수정
  const handleEditProduct = (productToEdit) => {
    setProductToEdit(productToEdit); // 상품 수정만 처리
  };

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
        onDelete={handleDeleteProduct} // 삭제만 담당
        onEdit={handleEditProduct} // 수정만 담당
      />
      <InputBar addProduct={addProduct} productToEdit={productToEdit} />
    </div>
  );
};

export default FilterableProductTable;
