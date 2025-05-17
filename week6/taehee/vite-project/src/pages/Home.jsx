import CategoryBox from "../components/Home/CategoryBox";
import BottomBar from "../components/shared/BottomBar";
import { foodCategories } from "../models/stores";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.wrapper}>
      <h2>오늘은 무엇을 먹을까요?</h2>
      <p>한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;</p>
      <div className={style.main}>
        {foodCategories.map((category) => (
          <CategoryBox
            key={category.id}
            name={category.name}
            image={category.image}
          />
        ))}
      </div>
      <BottomBar />
    </div>
  );
};

export default Home;
