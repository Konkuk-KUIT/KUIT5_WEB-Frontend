import React, { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import ProductForm from './ProductForm';

const FilterableProductTable = ({ products, setProducts }) => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null); // 수정할 상품 상태

  const filteredProducts = products.filter((product) => {
    const name = product.name 
      .toLowerCase()
      .includes(filterText.toLowerCase());
      const stockMatches = !inStockOnly || product.stocked;
      return name && stockMatches;
    
  });
  

  // 새 상품 추가
  const addProduct = (product) => {
    if (product.id) {
      // 수정 모드일 경우
      setProducts((prev) =>
        prev.map((p) => (p.id === product.id ? product : p)) // id가 일치하는 상품 수정
      );
    } else {
      // 새 상품 추가 모드일 경우
      setProducts((prev) => [...prev, { ...product, id: Date.now() }]); // 새 상품 추가
    }
  };

  // 상품 삭제
  const handleDeleteProduct = (productToDelete) => {
    setProducts((prev) => prev.filter((p) => p.id !== productToDelete.id));
  };

  // 상품 수정
  const handleEditProduct = (productToEdit) => {
    handleDeleteProduct(productToEdit);
    setProductToEdit(productToEdit); // 수정할 상품 정보를 상태로 저장
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
        products={filteredProducts}
      />
      {/* productToEdit이 있을 경우 InputBar를 수정 모드로 렌더링 */}
      <ProductForm addProduct={addProduct} productToEdit={productToEdit} />
    </div>
  );
};

export default FilterableProductTable;
