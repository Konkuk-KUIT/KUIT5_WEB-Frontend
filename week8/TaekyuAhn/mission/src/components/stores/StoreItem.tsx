import React, { useRef, useState } from "react";
import { storeDataType } from "./StoresList";
import styles from "./StoreItem.module.scss";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { useStores } from "../../hooks/useStores";

type Props = {
  data: storeDataType;
};

const StoreItem = ({ data }: Props) => {
  const { stores, patchStore, deleteStore } = useStores();
  const { rank, name, rating, reviews, deliveryTime, deliveryFee } = data;
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [inputName, setInputName] = useState(data.name);
  const [inputRating, setInputRating] = useState(data.rating);
  const [inputReview, setInputReview] = useState(data.reviews);
  const [inputDeliveryTime, setInputDeliveryTime] = useState(data.deliveryTime);
  const [inputDeliveryFee, setInputDeliveryFee] = useState(data.deliveryFee);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditComp = () => {
    const ratingArray = stores.map((item) => item.rating);
    ratingArray.push(Number(rating));

    const sorted = [...ratingArray].sort((a, b) => b - a);
    const calculatedRank = sorted.findIndex((item) => item === Number(inputRating)) + 1;

    const newData: storeDataType = {
      id: data.id,
      rank: calculatedRank,
      name: inputName,
      rating: inputRating,
      reviews: inputReview,
      deliveryTime: inputDeliveryTime,
      deliveryFee: inputDeliveryFee,
    };

    patchStore(newData);
    setIsEditing(false);
  };

  const handleDel = () => {
    deleteStore(String(data.id));
  };

  return (
    //<Link to="/store/1">
    <div className={styles.content}>
      <div className={styles.content__imageArea}>
        <div className={styles.content__imageArea__img}></div>
      </div>
      <div className={isEditing ? styles.inputDataArea : styles.content__dataArea}>
        {rank && <div className={styles.bolder}>{rank}위</div>}
        {isEditing ? (
          <input
            type="text"
            value={inputName}
            placeholder={name}
            onChange={(e) => setInputName(e.target.value)}
          ></input>
        ) : (
          <div className={styles.bolder}>{name}</div>
        )}

        <div className={styles.assessment}>
          <img src="/imgs/star.svg" alt="" />
          &nbsp;
          {isEditing ? (
            <input
              value={inputRating}
              className={styles.assessment__rating}
              placeholder={String(rating)}
              onChange={(e) => setInputRating(Number(e.target.value))}
            />
          ) : (
            rating
          )}
          (
          {isEditing ? (
            <input
              value={inputReview}
              className={styles.assessment__review}
              placeholder={String(reviews)}
              onChange={(e) => setInputReview(Number(e.target.value))}
            />
          ) : (
            reviews
          )}
          )
        </div>
        <div className={styles.delivery}>
          {isEditing ? (
            <input
              value={inputDeliveryTime}
              className={styles.delivery__time}
              placeholder={deliveryTime}
              onChange={(e) => setInputDeliveryTime(e.target.value)}
            />
          ) : (
            deliveryTime
          )}{" "}
          &#183;배달비
          {isEditing ? (
            <input
              value={inputDeliveryFee}
              className={styles.delivery__fee}
              placeholder={deliveryFee}
              onChange={(e) => setInputDeliveryFee(e.target.value)}
            />
          ) : (
            deliveryFee
          )}
        </div>
      </div>
      <div className={styles.content__buttonArea}>
        {isEditing ? (
          <Button text={"수정완료"} onClick={handleEditComp} />
        ) : (
          <Button text={"수정하기"} onClick={handleEdit} />
        )}

        <Button text={"삭제하기"} onClick={handleDel} />
      </div>
    </div>
    //</Link>
  );
};

export default StoreItem;
