import React, { useState, useEffect } from 'react';

const InputBar = ({ addProduct, productToEdit }) => {
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
    setNewProduct((prev) => ({
      ...prev,
      [label]: label === 'stocked' ? value === 'true' : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(newProduct); // 상품 추가 또는 수정
    setNewProduct({
      id: null,
      category: '',
      price: '',
      stocked: true,
      name: '',
    }); // 폼 초기화
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="category"
        type="text"
        value={newProduct.category}
        onChange={(e) => handleChange(e.target.value, 'category')}
        placeholder="Category..."
      />
      <input
        id="price"
        type="text"
        value={newProduct.price}
        onChange={(e) => handleChange(e.target.value, 'price')}
        placeholder="Price..."
      />
      <select
        value={newProduct.stocked.toString()}
        onChange={(e) => handleChange(e.target.value, 'stocked')}
      >
        <option value="true">In Stock</option>
        <option value="false">Out of Stock</option>
      </select>
      <input
        id="name"
        type="text"
        value={newProduct.name}
        onChange={(e) => handleChange(e.target.value, 'name')}
        placeholder="Name..."
      />
      <button type="submit">
        {productToEdit ? 'Save Changes' : 'Add New Product'}
      </button>
    </form>
  );
};

export default InputBar;
