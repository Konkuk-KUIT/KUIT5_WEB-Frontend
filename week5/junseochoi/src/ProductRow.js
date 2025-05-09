import { useState } from "react";
import DeleteProductRow from "./DeleteProductRow";
import ModifyProductRow from "./ModidyProductRow";

const ProductRow = ({ product, setProducts }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(product.name);
  const [editedPrice, setEditedPrice] = useState(product.price);

  const deleteProduct = (productToDelete) => {
    setProducts((prevProducts) =>
      prevProducts.filter((p) => p.name !== productToDelete.name)
    );
  };

  const productToModify = () => {
    setProducts((prev) =>
      prev.map((p) =>
        p.name === product.name
          ? { ...p, name: editedName, price: editedPrice }
          : p
      )
    );
    setIsEditing(false);
  };

  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>
        {isEditing ? (
          <input
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        ) : (
          product.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            value={editedPrice}
            onChange={(e) => setEditedPrice(e.target.value)}
          />
        ) : (
          product.price
        )}
      </td>
      <td>
        <DeleteProductRow product={product} deleteProduct={deleteProduct} />
      </td>
      <td>
        {isEditing ? (
          <button onClick={productToModify}>💾</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>✏️</button>
        )}
      </td>
    </tr>
  );
};

export default ProductRow;
