import React, { useState } from "react";
import Input from "./Input"
import * as S from "./ProductForm.styles"

const ProductForm = ({ addProduct }) => {

    const [newProduct, setNewProduct] = useState({
        category: "",
        price: "",
        stocked: true,
        name: ""
    });

    const handleChange = (value, label) => {
        setNewProduct((prev) => ({ ...prev, [label]: value }));
    };

    const handleAddNewProduct = () => {
        //new product 정보가 입력되지 않았을 경우 막는 오류 분기 설정.
        addProduct(newProduct);
    };

    return (
        <S.Form>
            <Input type={"text"}
                value={newProduct.category}
                onChange={(e) => handleChange(e.target.value, "category")}
                placeholder="category..." />

            <Input type={"text"}
                value={newProduct.price}
                onChange={(e) => handleChange(e.target.value, "price")}
                placeholder="price..." />

            <div>
                <label>Is Stocked</label>

                <input type={"checkbox"}
                    checked={newProduct.stocked}
                    onChange={(e) => handleChange(e.target.checked, "stocked")}
                />
            </div>
            <Input type={"text"}
                value={newProduct.name}
                onChange={(e) => handleChange(e.target.value, "name")}
                placeholder="name..." />

            <button onClick={handleAddNewProduct} type={"button"}>
                add new product
            </button>
        </S.Form>
    );

};

export default ProductForm;