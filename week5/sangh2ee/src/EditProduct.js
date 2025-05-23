import React, { useState } from 'react';

const EditProduct = ({ product, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (value, field) => {
    setEditedProduct((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onEdit(editedProduct, product.name);
    setEditing(false);
  };

  if (!editing) {
    return (
      <button type="button" onClick={() => setEditing(true)}>
        ✏️
      </button>
    );
  }

  return (
    <td colSpan="3">
      <input
        type="text"
        value={editedProduct.name}
        onChange={(e) => handleChange(e.target.value, 'name')}
      />
      <input
        type="text"
        value={editedProduct.price}
        onChange={(e) => handleChange(e.target.value, 'price')}
      />
      <input
        type="text"
        value={editedProduct.category}
        onChange={(e) => handleChange(e.target.value, 'category')}
      />
      <label>
        <input
          type="checkbox"
          checked={editedProduct.stocked}
          onChange={(e) => handleChange(e.target.checked, 'stocked')}
        />
        In Stock
      </label>
      <button type="button" onClick={handleSave}>
        저장
      </button>
    </td>
  );
};

export default EditProduct;