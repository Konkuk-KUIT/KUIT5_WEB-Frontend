import React from 'react';

const ProductRow = ({ product, onDelete, onEdit }) => {
  const handleDeleteClick = (product) => {
    if (window.confirm(`정말로 "${product.name}" 상품을 삭제하시겠습니까?`)) {
      onDelete(product); // 해당 상품만 삭제
    }
  };

  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}</td>

      <td>
        <button
          style={{ marginRight: '10px', padding: '5px 10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}
          onClick={() => onEdit(product)}>
          수정
        </button>
        
        <button
          style={{ padding: '5px 10px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px' }}
          onClick={() => handleDeleteClick(product)}>
          삭제
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
