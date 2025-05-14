import {useState} from "react";

function ProductRow({product, products, setProducts}) {
    const [isEditing, setIsEditing] = useState(false);
    const [currentName, setCurrentName] = useState(product.name);
    const [currentPrice, setCurrentPrice] = useState(product.price);

    const handleNameChange = (e) => {
        setCurrentName(e.target.value)}
    const handlePriceChange = (e) => {setCurrentPrice(e.target.value)}

    const handleEditBtn = ()=>{
        if(isEditing) {
            //수정 완료
            const newProducts = [...products]
            newProducts.map((pd)=>{
                if(pd.name === product.name){
                    pd.name = currentName
                    pd.price = currentPrice
                }
            })
            setProducts(newProducts)
            setIsEditing(false);
        }
        else{
            // 수정 상태 진입
            setIsEditing(true);
        }
    }

    const handleDeleteBtn = ()=>{
        const deleted = products.filter(item => item.name !== product.name)
        setProducts(deleted)
    }

    return (
        <tr>
            <td style={{color: product.stocked ? "red" : "black"}}>
                {isEditing ? (<form>
                    <input type="text" value={currentName.toString()} onChange={handleNameChange}/>
                </form>) : product.name}
            </td>
            <td>
                {isEditing ? (<form>
                    <input type="text" value={currentPrice.toString()} onChange={handlePriceChange}/>
                </form>) : product.price}
            </td>
            <td>
                <button onClick={handleEditBtn}>{isEditing ? "✔" : "🔧"}</button>
            </td>
            <td>
                <button onClick={handleDeleteBtn}>❌</button>
            </td>
        </tr>
    )
}

export default ProductRow