import React, { useState } from 'react';
import FilterableProductTable from './FilterableProductTable';

const App = () => {
  const initialProducts = [
    { id: 1, category: 'Fruits', name: 'Apple', price: '$1', stocked: true },
    { id: 2, category: 'Fruits', name: 'Dragonfruit', price: '$1', stocked: true },
    { id: 3, category: 'Fruits', name: 'Passionfruit', price: '$2', stocked: false },
    { id: 4, category: 'Vegetables', name: 'Spinach', price: '$2', stocked: true },
    { id: 5, category: 'Vegetables', name: 'Pumpkin', price: '$4', stocked: false },
    { id: 6, category: 'Vegetables', name: 'Peas', price: '$1', stocked: true },
  ];

  const [products, setProducts] = useState(initialProducts);

  return (
    <FilterableProductTable 
      initialProducts={products} 
      setProducts={setProducts} 
    />
  );
};

export default App;
