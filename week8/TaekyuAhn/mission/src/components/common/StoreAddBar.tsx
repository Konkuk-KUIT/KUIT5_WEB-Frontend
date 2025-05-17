import { useState } from "react";
import { useStores } from "../../hooks/useStores";
import Button from "./Button";
import styles from "./StoreAddBar.module.scss";
import { storeDataType } from "../stores/StoresList";

const StoreAddBar = () => {
  const { addStore, stores } = useStores();
  const [name, setName] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const [reviews, setReviews] = useState<string>("");
  const [deliveryTime, setDeliveryTime] = useState<string>("");
  const [deliveryFee, setDeliveryFee] = useState<string>("");

  const handleClick = () => {
    if (!name || !rating || !reviews || !deliveryTime || !deliveryFee) {
      console.error("모든 필드를 입력해야 합니다.");
      return;
    }

    const ratingArray = stores.map((item) => item.rating);
    ratingArray.push(Number(rating));

    const sorted = [...ratingArray].sort((a, b) => b - a);
    const rank = sorted.findIndex((item) => item === Number(rating)) + 1;

    const data: storeDataType = {
      rank: rank,
      name: name,
      rating: Number(rating),
      reviews: Number(reviews),
      deliveryTime: deliveryTime,
      deliveryFee: deliveryFee,
    };
    addStore(data);
    setName("");
    setRating("");
    setReviews("");
    setDeliveryTime("");
    setDeliveryFee("");
  };

  return (
    <div className={styles.contents}>
      <div className={styles.contents__inputArea}>
        <input
          className={styles.contents__inputArea__inputTag}
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={styles.contents__inputArea__inputTag}
          type="text"
          placeholder="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <input
          className={styles.contents__inputArea__inputTag}
          type="text"
          placeholder="reviews"
          value={reviews}
          onChange={(e) => setReviews(e.target.value)}
        />
        <input
          className={styles.contents__inputArea__inputTag}
          type="text"
          placeholder="deliveryTime"
          value={deliveryTime}
          onChange={(e) => setDeliveryTime(e.target.value)}
        />
        <input
          className={styles.contents__inputArea__inputTag}
          type="text"
          placeholder="deliveryFee"
          value={deliveryFee}
          onChange={(e) => setDeliveryFee(e.target.value)}
        />
      </div>
      <div className={styles.contents__buttonArea}>
        <Button text="추가하기" onClick={handleClick} />
      </div>
    </div>
  );
};

export default StoreAddBar;
