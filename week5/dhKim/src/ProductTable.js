import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";


const ProductTable=({products,filterText,inStockOnly,setProducts})=>{
    const rows=[];
    let lastCategory=null;

    products
    .sort((a,b)=>a.category>b.category)
    .map((product)=>{
        if(product.name.toLowerCase().indexOf(filterText.toLowerCase())===-1){
            return;
        }

        if(inStockOnly&&!product.stocked){
            return;
        }

        if(product.category!=lastCategory){
            rows.push( 
            <ProductCategoryRow 
            category={product.category}//priduct의 category를 props로 내려줬다...
            key={product.category}/>
            );
        }//props로 내려준거임....
        
        rows.push(
            <ProductRow 
                product={product}  
                key={product.name}
                setProducts={setProducts}    
            />
        );
        //row 버튼에 삭제버튼을 추가하가 눌렀을 때 제거가 되는 것을 구현
        //연필 눌러쓸때에는 가격이나 name이 수정이 되도록 구현하는 것이다.

        lastCategory=product.category;
    });
       
return(
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
    );
};

export default ProductTable;
