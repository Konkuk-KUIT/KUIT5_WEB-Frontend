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
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: end;
  gap: 10px;

  & > img {
    width: 24px;
    height: 24px;
  }
`;
const StoreDescription = styled.div`
  & > .grade {
    font-size: 17px;
    font-weight: 600;
    margi-bottom: 2px;
  }
  & > .storeNameInput {
    border: 1px solid black;
  }
  & > .storeNameP {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  & .rideTipInput {
    width: 75px;
    border: 1px solid black;
  }
`;

type Store = {
  name: string;
  rating: number;
  ratingTotal: number;
  eta: string;
  rideTip: number;
  grade?: number;
  id: string;
  paymethod: string;
  minOrder: number;
};
type StoresItemProps = {
  store: Store;
  cateName: string;
  editStore: (storeId: string, name: string, rideTip: number) => Promise<void>;
  deleteStore: (storeId: string) => Promise<void>;
};

function StoresItem({
  store,
  cateName,
  editStore,
  deleteStore,
}: StoresItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(store.name);
  const [rideTip, setRideTip] = useState(store.rideTip);

  const editComplete = () => {
    editStore(store.id, name, Number(rideTip));
    setIsEditing(false);
  };

  const storeDescription = (
    <StoreDescription>
      {"grade" in store && <p className="grade">{store.grade}위</p>}
      {isEditing ? (
        <input
          type="text"
          className="storeNameInput"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      ) : (
        <p className="storeNameP">{store.name}</p>
      )}

      <p>
        <img src={star} alt="star" />
        {` ${store.rating} (${store.ratingTotal.toLocaleString()})`}
      </p>
      {isEditing ? (
        <>
          <p>{store.eta}</p>
          <p>
            배달비{" "}
            <input
              type="number"
              className="rideTipInput"
              value={rideTip}
              onChange={(e) => {
                setRideTip(Number(e.target.value));
              }}
            />
            원
          </p>
        </>
      ) : (
        <p>{`${store.eta} ∙ 배달비 ${store.rideTip.toLocaleString()}원`}</p>
      )}
    </StoreDescription>
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

      <ButtonWrapper>
        {isEditing ? (
          <img src={checkImg} alt="check" onClick={editComplete} />
        ) : (
          <img
            src={editImg}
            alt="edit"
            onClick={() => {
              setIsEditing(true);
            }}
          />
        )}
        <img
          src={deleteImg}
          alt="delete"
          onClick={() => {
            deleteStore(store.id);
          }}
        />
      </ButtonWrapper>
    </Item>
  );
}

export default StoresItem;
