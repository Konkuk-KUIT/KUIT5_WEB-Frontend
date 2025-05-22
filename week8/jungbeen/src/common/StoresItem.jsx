import styled from "styled-components";
import { Link } from "react-router-dom";

import star from "../assets/images/star.svg";
import editImg from "../assets/images/edit.svg";
import deleteImg from "../assets/images/delete.svg";
import checkImg from "../assets/images/check.svg";

import { useState } from "react";

const Item = styled.div`
  padding: 24px 0;
  display: flex;
  gap: 17px;
  height: 151px;
  box-sizing: border-box;
`;
const StoreImage = styled.div`
  background-color: #ececec;
  border-radius: 8px;
  width: 54px;
  height: 54px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function StoresItem({ store, cateName, editStore, deleteStore }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(store.name);
  const [rideTip, setRideTip] = useState(store.rideTip);

  const storeDescription = (
    <div>
      {"grade" in store && (
        <p
          style={{
            fontSize: "17px",
            fontWeight: "600",
            marginBottom: "2px",
          }}
        >
          {store.grade}위
        </p>
      )}
      {isEditing ? (
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          style={{ border: "1px solid black" }}
        />
      ) : (
        <p
          style={{
            fontSize: "17px",
            fontWeight: "600",
            marginBottom: "5px",
          }}
        >
          {store.name}
        </p>
      )}

      <p>
        <img src={star} alt="star" />
        {` ${store.rating} (${store.ratingTotal.toLocaleString()})`}
      </p>
      {isEditing ? (
        <>
          <p>store.eta</p>
          <p>
            배달비{" "}
            <input
              type="number"
              style={{ width: "75px", border: "1px solid black" }}
              value={rideTip}
              onChange={(e) => {
                setRideTip(e.target.value);
              }}
            />
            원
          </p>
        </>
      ) : (
        <p>{`${store.eta} ∙ 배달비 ${store.rideTip.toLocaleString()}원`}</p>
      )}
    </div>
  );

  return (
    <Item>
      <StoreImage />
      {isEditing ? (
        storeDescription
      ) : (
        <StyledLink
          to={`/store/${store.id}`}
          state={{ store: store, cateName: cateName }}
        >
          {storeDescription}
        </StyledLink>
      )}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flex: "1",
          justifyContent: "end",
          gap: "10px",
        }}
      >
        {isEditing ? (
          <img
            src={checkImg}
            alt="check"
            style={{ height: "24px", width: "24px" }}
            onClick={() => {
              editStore(store.id, name, Number(rideTip));
              setIsEditing(false);
            }}
          />
        ) : (
          <img
            src={editImg}
            alt="edit"
            style={{ height: "24px", width: "24px" }}
            onClick={() => {
              setIsEditing(true);
            }}
          />
        )}
        <img
          src={deleteImg}
          alt="delete"
          style={{ height: "24px", width: "24px" }}
          onClick={() => {
            deleteStore(store.id);
          }}
        />
      </div>
    </Item>
  );
}

export default StoresItem;
