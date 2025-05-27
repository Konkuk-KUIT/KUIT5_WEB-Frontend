import { useEffect, useState } from "react";
import Header from "../components/shared/header";
import style from "./Stores.module.css";
import BottomBar from "../components/shared/BottomBar";
import Store from "../components/stores/Store";
import {
  getStoreList,
  createStore,
  deleteStore,
  updateStore,
} from "../api/api";

const Stores = () => {
  const [storeList, setStoreList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [newStore, setNewStore] = useState({
    name: "",
    rating: 0,
    reviews: 0,
    deliveryTime: "",
    deliveryFee: 0,
    minOrder: 0,
    purMethod: "",
    rank: 0,
  });

  const handleDelete = async (id) => {
    try {
      await deleteStore(id);
      setStoreList((prev) => prev.filter((store) => store.id !== id));
    } catch (error) {
      console.error("삭제 실패:", error);
    }
  };

  const handleEdit = async (store) => {
    const newName = prompt("새 가게 이름을 입력하세요", store.name);
    if (!newName || newName.trim() === "") return;
    const updatedStore = { ...store, name: newName };
    try {
      const updated = await updateStore(store.id, updatedStore);
      setStoreList((prev) =>
        prev.map((s) => (s.id === updated.id ? updated : s))
      );
    } catch (error) {
      console.error("수정 실패:", error);
    }
  };

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const data = await getStoreList();
        setStoreList(data);
      } catch (error) {
        console.error("가게 목록 불러오기 실패:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStore((prev) => ({
      ...prev,
      [name]:
        name === "rating" ||
        name === "reviews" ||
        name === "deliveryFee" ||
        name === "minOrder" ||
        name === "rank"
          ? Number(value)
          : value,
    }));
  };

  const handleAddStore = async () => {
    try {
      const created = await createStore(newStore);
      setStoreList((prev) => [...prev, created]);
      setNewStore({
        name: "",
        rating: 0,
        reviews: 0,
        deliveryTime: "",
        deliveryFee: 0,
        minOrder: 0,
        purMethod: "",
        rank: 0,
      });
    } catch (error) {
      console.error("가게 추가 실패:", error);
    }
  };

  return (
    <div className={style.wrapper}>
      <Header />
      <h2 className={style.salad}>샐러드</h2>
      {loading ? (
        <p>로딩 중...</p>
      ) : (
        storeList.map((store, index) => (
          <Store
            key={store.id || index}
            name={store.name}
            rank={store.rank}
            rating={store.rating}
            reviews={store.reviews}
            deliveryTime={store.deliveryTime}
            deliveryFee={store.deliveryFee}
            onDelete={() => handleDelete(store.id)}
            onEdit={() => handleEdit(store)}
          />
        ))
      )}
      <div className={style.addStoreForm}>
        <h3>가게 추가</h3>

        <div className={style.inputRow}>
          <div className={style.inputGroup}>
            <label>가게 이름</label>
            <input
              name="name"
              placeholder="가게 이름"
              value={newStore.name}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.inputGroup}>
            <label>랭크</label>
            <input
              name="rank"
              type="number"
              placeholder="랭크"
              value={newStore.rank}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={style.inputRow}>
          <div className={style.inputGroup}>
            <label>평점</label>
            <input
              name="rating"
              type="number"
              placeholder="평점"
              value={newStore.rating}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.inputGroup}>
            <label>리뷰 수</label>
            <input
              name="reviews"
              type="number"
              placeholder="리뷰 수"
              value={newStore.reviews}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={style.inputRow}>
          <div className={style.inputGroup}>
            <label>배달 시간</label>
            <input
              name="deliveryTime"
              placeholder="배달 시간"
              value={newStore.deliveryTime}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.inputGroup}>
            <label>배달 요금</label>
            <input
              name="deliveryFee"
              type="number"
              placeholder="배달 요금"
              value={newStore.deliveryFee}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={style.inputRow}>
          <div className={style.inputGroup}>
            <label>최소 주문 금액</label>
            <input
              name="minOrder"
              type="number"
              placeholder="최소 주문 금액"
              value={newStore.minOrder}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.inputGroup}>
            <label>결제 방법</label>
            <input
              name="purMethod"
              placeholder="결제 방법"
              value={newStore.purMethod}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button className={style.addButton} onClick={handleAddStore}>
          가게 추가
        </button>
      </div>

      <BottomBar />
    </div>
  );
};

export default Stores;
