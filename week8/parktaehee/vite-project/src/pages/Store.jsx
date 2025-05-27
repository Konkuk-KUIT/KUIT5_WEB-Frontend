import { useEffect, useState } from "react";
import Header from "../components/shared/header";
import style from "./Store.module.css";
import BottomBar from "../components/shared/BottomBar";
import Salad from "../components/store/Salad";
import StoreInfo from "../components/store/StoreInfo";
import { getStoreList, getSaladMenu } from "../api/api";

const Store = () => {
  const [store, setStore] = useState(null);
  const [salads, setSalads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const storeList = await getStoreList();
        const saladMenu = await getSaladMenu();
        setStore(storeList[0]);
        setSalads(saladMenu);
      } catch (error) {
        console.error("데이터 불러오기 실패:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStoreData();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (!store) return <p>가게 정보를 불러오지 못했습니다.</p>;

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
      {salads.map((item, index) => (
        <Salad
          key={index}
          name={item.name}
          isBest={item.isBest}
          price={item.price}
          ingredients={item.ingredients}
        />
      ))}
      <BottomBar />
    </div>
  );
};

export default Store;
