import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductCategory from './ProductCategory'
import ProductRow from './ProductRow';

const ProductTable = ({ products, filterText, inStockOnly, onDelete, onEdit }) => {
    const rows = [];
    const filteredProducts = products.filter((product) => {
        return (
          product.name.toLowerCase().includes(filterText.toLowerCase()) &&
          (!inStockOnly || product.stocked) // inStockOnly가 true일 경우 재고가 있는 제품만
        );
      });

    let lastCategory = null;
    products
    .sort((a,b) => a.category > b.category)
    
    .map((product,index)=>{
        if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) == -1){
            return;
        }

        if(inStockOnly && !product.stocked){
            return;
        }

        if(product.category!=lastCategory){
            rows.push(<ProductCategoryRow category = {product.category} key={product.category}/> );
        }
        rows.push(<ProductRow product = {product} key = {product.name} onDelete = {onDelete} onEdit = {onEdit}/>)
        
        lastCategory = product.category;
    })

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
   );
};

export default ProductTable