import ProductCategoryRow from "./ProductCategoryRow.jsx";
import ProductRow from "./ProductRow.jsx";

function ProductTable({products, filterText, inStockOnly, setProducts}) {
    let lastCategory = ""
    const rows = []

    products
        .sort((a, b) => a.category - b.category)
        .map((product) => {
        if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1 ){
            return;
        }
        if(inStockOnly && !product.stocked){
            return;
        }

        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow key={product.category}
                                       category={product.category}/>
            )
        }
        rows.push(
                <ProductRow product={product}
                            products={products}
                              setProducts={setProducts}
                              key={product.name}/>
)
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default ProductTable