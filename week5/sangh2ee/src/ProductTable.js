import React , { useState }from 'react'; 
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import Deleteproduct from './Deleteproduct';

const ProductTable = ({ products,filterText, inStockOnly,onDelete }) => {
    const rows=[];
    let lastCategory=null;

    products.map((product) => {
        if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) == -1){
            return;
        }

        if(inStockOnly&&!product.stocked){
            return;
        }

        if (product.category !== lastCategory){
            rows.push (
                <ProductCategoryRow
                category={product.category}
                key={product.category}
                onDelete={onDelete}/> 
            );
        }    
    rows.push(<ProductRow 
      product={product} 
      key={product.name}
      onDelete={onDelete}
      />);
      lastCategory=product.category;
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
    );
  };
  
  export default ProductTable;