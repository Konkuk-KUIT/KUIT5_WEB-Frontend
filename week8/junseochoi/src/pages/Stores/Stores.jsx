import * as S from "./Stores.styles";
import BottomOrderBar from "../../components/BottomOrderBar";
import Title from "../../components/Title";
import StoreList from "../../components/StoreList";
import GoBack from "../../components/GoBack";
import { useNavigate } from "react-router-dom";
import { useStoresList } from "../../hooks/useStoresList";
import Button from "../../components/Button";
import { useState } from "react";

const Stores = () => {
  const [grade, setGrade] = useState("");
  const [storeName, setStoreName] = useState("");
  const [rating, setRating] = useState("");
  const [delivery, setDelivery] = useState("");

  const { storesList, addStoresList, deleteStoresList, updateStoresList } =
    useStoresList();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleAdd = () => {
    try {
      addStoresList(grade, storeName, rating, delivery);
      setGrade("");
      setStoreName("");
      setRating("");
      setDelivery("");
    } catch (err) {
      console.error("추가 실패", err);
    }
  };

  return (
    <>
      <GoBack onClick={handleClick} />
      <S.Header>
        <Title value="샐러드" />
      </S.Header>
      <S.Bottomup>
        {storesList.map((item) => (
          <StoreList
            key={item.id}
            id={item.id}
            Grade={item.Grade}
            StoreName={item.StoreName}
            Rating={item.Rating}
            Delivery={item.Delivery}
            deleteStoresList={deleteStoresList}
            updateStoresList={updateStoresList}
          />
        ))}
        <S.InputDiv>
          <input
            type="text"
            placeholder="Grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
          <input
            type="text"
            placeholder="StoreName"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <input
            type="text"
            placeholder="Delivery"
            value={delivery}
            onChange={(e) => setDelivery(e.target.value)}
          />
          <Button
            value="가게 추가"
            width="82px"
            heigt="32px"
            onClick={handleAdd}
          />
        </S.InputDiv>
      </S.Bottomup>
      <BottomOrderBar />
    </>
  );
};

export default Stores;
