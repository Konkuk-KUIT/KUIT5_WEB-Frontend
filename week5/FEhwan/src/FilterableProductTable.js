import React, { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import InputBar from './InputBar';

const FilterableProductTable = ({ products, setProducts }) => {
  const [filterText, setFilterText] = useState(''); // 검색어
  const [inStockOnly, setInStockOnly] = useState(false); // 재고만 보기
  const [productToEdit, setProductToEdit] = useState(null); // 수정할 상품 상태

  // 새 상품 추가 또는 수정
  const addProduct = (product) => {
    if (product.id) {
      // 수정 모드: 이미 id가 있는 경우 해당 상품 수정
      setProducts((prev) =>
        prev.map((p) => (p.id === product.id ? product : p))
      );
    } else {
      // 새 상품 추가: id가 없는 경우
      setProducts((prev) => [...prev, { ...product, id: Date.now() }]);
    }
  };

  // 상품 삭제
  const handleDeleteProduct = (productToDelete) => {
    setProducts((prev) => prev.filter((p) => p.id !== productToDelete.id));
  };

  // 상품 수정
  const handleEditProduct = (productToEdit) => {
    setProductToEdit(productToEdit); // 수정할 상품 상태 설정
  };

  return (
    <div>
      {/* 검색바 및 필터 기능 */}
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      
      {/* 상품 테이블 */}
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
        onDelete={handleDeleteProduct} // 삭제 기능
        onEdit={handleEditProduct} // 수정 기능
      />
      
      {/* 상품 추가/수정 폼 */}
      <InputBar addProduct={addProduct} productToEdit={productToEdit} />
    </div>
  );
};

export default FilterableProductTable;
