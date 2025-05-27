import { useEffect, useState } from "react";
import CategoryBox from "../components/Home/CategoryBox";
import BottomBar from "../components/shared/BottomBar";
import { getFoodCategories } from "../api/api";
import style from "./Home.module.css";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getFoodCategories();
        setCategories(data);
      } catch (error) {
        console.error("카테고리 불러오기 실패:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className={style.wrapper}>
      <h2>오늘은 무엇을 먹을까요?</h2>
      <p>한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;</p>
      <div className={style.main}>
        {loading ? (
          <p>로딩 중...</p>
        ) : (
          categories.map((category) => (
            <CategoryBox
              key={category.id}
              name={category.name}
              image={category.image}
            />
          ))
        )}
      </div>
      <BottomBar />
    </div>
  );
};

export default Home;
