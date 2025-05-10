import {useState} from "react";

function InputBar({addProduct}) {
    const [newProduct, setNewProduct] = useState({
        category: "", price: "", stocked: true, name: "" });

    const handleChange = (value, label) => {
        setNewProduct((prevState) => ({...prevState, [label]: value}));
    }

    const handleAddNewProduct = () => {
        console.log(newProduct);
        addProduct((prevState) =>  ([...prevState, newProduct]))
    };

    return (
        <form>
            <input type={"text"}
                   placeholder={"category ... "}
                   value={newProduct.category}
                   onChange={(e) => handleChange(e.target.value, "category")}/>
            <input type={"text"}
                   placeholder={"price ... "}
                   value={newProduct.price}
                   onChange={(e) => handleChange(e.target.value, "price")}/>
            <label>Is Stocked</label>
            <label>
                <input type={"checkbox"}
                       checked={newProduct.stocked}
                       onChange={(e) => handleChange(e.target.checked, "stocked")}/>
            </label>
            <input type={"text"}
                   placeholder={"name ... "}
                   value={newProduct.name}
                   onChange={(e) => handleChange(e.target.value, "name")}/>
            <button onClick={handleAddNewProduct} type={"button"}>Add new product</button>
        </form>
    )
}

export default InputBar