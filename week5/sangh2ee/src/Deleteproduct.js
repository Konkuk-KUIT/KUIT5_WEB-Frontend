import React from 'react'

const Deleteproduct = ({ product, deleteProduct }) => {
    const handleDeleteProduct = () => {
        deleteProduct(product.name);  
      };
    
      return (
        <button onClick={handleDeleteProduct} type="button">
          ❌
        </button>
      );
};
export default Deleteproduct; 