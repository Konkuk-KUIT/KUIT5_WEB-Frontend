import { saladMenu } from "../models/stores";
import { storeList } from "../models/stores";
import Header from "../components/shared/header";
import style from "./Store.module.css";
import BottomBar from "../components/shared/BottomBar";
import Salad from "../components/store/Salad";
import StoreInfo from "../components/store/StoreInfo";

const Store = () => {
  const store = storeList[0];
  return (
    <div className={style.wrapper}>
      <Header />
      <StoreInfo
        name={store.name}
        rating={store.rating}
        reviews={store.reviews}
        purMethod={store.purMethod}
        minOrder={store.minOrder}
        deliveryTime={store.deliveryTime}
      />
      <h2 className={style.salad}>샐러드</h2>
      {saladMenu.map((saladMenu, index) => (
        <Salad
          key={index}
          name={saladMenu.name}
          isBest={saladMenu.isBest}
          price={saladMenu.price}
          ingredients={saladMenu.ingredients}
        />
      ))}
      <BottomBar />
    </div>
  );
};

export default Store;
