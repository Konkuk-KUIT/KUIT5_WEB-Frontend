import React, { useState, useEffect } from 'react';
import * as S from './ProductForm.styles';
import Input from './Input';
const ProductForm = ({ addProduct, productToEdit }) => {
  const [newProduct, setNewProduct] = useState({
    id: null,
    category: '',
    price: '',
    stocked: true,
    name: '',
  });

  // productToEdit이 있을 경우 해당 상품으로 상태 초기화
  useEffect(() => {
    if (productToEdit) {
      setNewProduct(productToEdit);
    } else {
      setNewProduct({
        id: null,
        category: '',
        price: '',
        stocked: true,
        name: '',
      });
    }
  }, [productToEdit]);

  const handleChange = (value, label) => {
    // product 정보가 입력되지 않을때 막는 로직
    setNewProduct((prev) => ({
      ...prev,
      [label]: label === 'stocked' ? value === 'true' : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { name, category, price } = newProduct;
    if (!name.trim() || !category.trim() || !price.trim()) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
  
    addProduct(newProduct);
  
    setNewProduct({
      id: null,
      category: '',
      price: '',
      stocked: true,
      name: '',
    });
  };
  

  return (
    <S.Form onSubmit={handleSubmit}>
      <Input
        id="category"
        type="text"
        value={newProduct.category}
        onChange={(e) => handleChange(e.target.value, 'category')}
        placeholder="Category..."
      />
      <Input
        id="price"
        type="text"
        value={newProduct.price}
        onChange={(e) => handleChange(e.target.value, 'price')}
        placeholder="Price..."
      />
      <select
        type = {"checkbox"}
        value={newProduct.stocked.toString()}
        onChange={(e) => handleChange(e.target.value, 'stocked')}
      >
        <option value="true">In Stock</option>
        <option value="false">Out of Stock</option>
      </select>
      <Input
        id="name"
        type="text"
        value={newProduct.name}
        onChange={(e) => handleChange(e.target.value, 'name')}
        placeholder="Name..."
      />
      <button type="submit">
        {productToEdit ? 'Save Changes' : 'Add New Product'}
      </button>
    </S.Form>
  );
};

export default ProductForm;
