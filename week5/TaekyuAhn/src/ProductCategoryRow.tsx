import React from "react";

type Props = {
  category: string;
};

const ProductCategory = ({ category }: Props) => {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
};

export default ProductCategory;
