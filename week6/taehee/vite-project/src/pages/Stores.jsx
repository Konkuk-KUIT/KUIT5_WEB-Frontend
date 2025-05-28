import { storeList } from "../models/stores";
import Header from "../components/shared/header";
import style from "./Stores.module.css";
import BottomBar from "../components/shared/BottomBar";
import Store from "../components/stores/Store";

const Stores = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <h2 className={style.salad}>샐러드</h2>
      {storeList.map((storeList, index) => (
        <Store
          key={index}
          name={storeList.name}
          rank={storeList.rank}
          rating={storeList.rating}
          reviews={storeList.reviews}
          deliveryTime={storeList.deliveryTime}
          deliveryFee={storeList.deliveryFee}
          index={index}
        />
      ))}
      <BottomBar />
    </div>
  );
};

export default Stores;
