import React, { useState, useEffect } from "react";

const InputBar = ({
  addProduct,
  categories,
  editingName,
  handleUpdateProduct,
  products,
}) => {
  const [newProduct, setNewProduct] = useState({
    category: "",
    name: "",
    price: "",
    stocked: true,
  });

  useEffect(() => {
    if (editingName) {
      const productToEdit = products.find((p) => p.name === editingName);
      if (productToEdit) setNewProduct({ ...productToEdit });
    } else {
      setNewProduct({ category: "", name: "", price: "", stocked: true });
    }
  }, [editingName, products]);

  const handleChange = (value, label) => {
    setNewProduct({ ...newProduct, [label]: value });
  };

  const handleAddNewProduct = () => {
    addProduct(newProduct);
  };

  const handleSubmit = () => {
    if (editingName) {
      handleUpdateProduct();
    } else {
      addProduct(newProduct);
      setNewProduct({ category: "", name: "", price: "", stocked: true });
    }
  };

  const [isCustom, setIsCustom] = useState(true);
  const getEnabledCategories = categories;

  return (
    <form>
      <button onClick={handleSubmit} type="button">
        {editingName ? "update product" : "add new product"}
      </button>
      <select
        value={isCustom ? "__custom__" : newProduct.category}
        onChange={(e) => {
          const val = e.target.value;
          if (val === "__custom__") {
            setIsCustom(true);
            handleChange("", "category");
          } else {
            setIsCustom(false);
            handleChange(val, "category");
          }
        }}
      >
        <option value="">카테고리 선택...</option>
        {getEnabledCategories().map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
        <option value="__custom__">새 카테고리 직접 입력</option>
      </select>

      {isCustom && (
        <input
          type={"text"}
          value={newProduct.category}
          onChange={(e) => handleChange(e.target.value, "category")}
          placeholder="category..."
        />
      )}

      <input
        type={"text"}
        value={newProduct.price}
        onChange={(e) => handleChange(e.target.value, "price")}
        placeholder="price..."
      />
      <input
        type={"text"}
        value={newProduct.name}
        onChange={(e) => handleChange(e.target.value, "name")}
        placeholder="name..."
      />
      <button onClick={handleAddNewProduct} type="button">
        add new product
      </button>
      <input
        type={"checkbox"}
        value={newProduct.stocked}
        onChange={(e) => handleChange(e.target.checked, "stocked")}
      />
      <label>Is Stocked</label>
    </form>
  );
};

export default InputBar;
