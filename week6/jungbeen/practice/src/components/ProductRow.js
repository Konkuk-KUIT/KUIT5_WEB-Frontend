import React, { useState } from "react";

import editImg from "../assets/edit.svg";
import deleteImg from "../assets/delete.svg";
import checkImg from "../assets/check.svg";

const ProductRow = ({ product, setProducts }) => {
  const [editing, setEditing] = useState(false);
  const [pdName, setPdName] = useState(product.name);
  const [pdPrice, setPdPrice] = useState(product.price.substring(1));

  const editItem = () => {
    setEditing(true);
  };

  const deleteItem = () => {
    setProducts((prev) => prev.filter((x) => x !== product));
  };

  const editComplete = () => {
    setEditing(false);
    setProducts((prev) =>
      prev.map((pd) =>
        pd.name !== product.name
          ? pd
          : { ...pd, name: pdName, price: "$" + pdPrice }
      )
    );
  };

  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>
        {editing ? (
          <input
            type="text"
            value={pdName}
            onChange={(e) => setPdName(e.target.value)}
          />
        ) : (
          product.name
        )}
      </td>
      <td>
        {editing ? (
          <>
            $
            <input
              type="number"
              value={pdPrice}
              onChange={(e) => setPdPrice(e.target.value)}
              style={{ width: "40px" }}
            />
          </>
        ) : (
          product.price
        )}
      </td>
      <td>
        {editing ? (
          <img
            src={checkImg}
            alt="check"
            style={{ cursor: "pointer" }}
            onClick={editComplete}
          />
        ) : (
          <img
            src={editImg}
            alt="edit"
            style={{ cursor: "pointer" }}
            onClick={editItem}
          />
        )}
      </td>
      <td>
        <img
          src={deleteImg}
          alt="delete"
          style={{ cursor: "pointer" }}
          onClick={deleteItem}
        />
      </td>
    </tr>
  );
};

export default ProductRow;
