import Button from "./Button";
import styles from "./StoreAddBar.module.scss";

const StoreAddBar = () => {
  return (
    <div className={styles.contents}>
      <div className={styles.contents__inputArea}>
        <input className={styles.contents__inputArea__inputTag} type="text" placeholder="rank" />
        <input className={styles.contents__inputArea__inputTag} type="text" placeholder="name" />
        <input className={styles.contents__inputArea__inputTag} type="text" placeholder="rating" />
        <input className={styles.contents__inputArea__inputTag} type="text" placeholder="reviews" />
        <input
          className={styles.contents__inputArea__inputTag}
          type="text"
          placeholder="deliveryTime"
        />
        <input
          className={styles.contents__inputArea__inputTag}
          type="text"
          placeholder="deliveryFee"
        />
      </div>
      <div className={styles.contents__buttonArea}>
        <Button text="추가하기" />
      </div>
    </div>
  );
};

export default StoreAddBar;
