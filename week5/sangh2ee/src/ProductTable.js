import React , { useState }from 'react'; 
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({ products,filterText, inStockOnly, onDelete, onEdit}) => {
    const rows=[];
    let lastCategory=null;
    //추가할 때 발생하는 문제 해결
    const sortedProducts = [...products].sort((a, b) =>
      a.category.localeCompare(b.category)
    );
    sortedProducts.map((product) => {
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
                onDelete={onDelete}
                onEdit={onEdit}
                /> 
            );
        }    
    rows.push(<ProductRow 
      product={product} 
      key={product.name}
      onDelete={onDelete}
      onEdit={onEdit}
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