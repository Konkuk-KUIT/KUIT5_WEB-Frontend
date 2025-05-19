import * as S from "./Stores.styles";
import BottomOrderBar from "../../components/BottomOrderBar";
import Title from "../../components/Title";
import StoreList from "../../components/StoreList";
import GoBack from "../../components/GoBack";
import { useNavigate } from "react-router-dom";
import { useStoresList } from "../../hooks/useStoresList";

const Stores = () => {
  const { storesList } = useStoresList();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <GoBack onClick={handleClick} />
      <S.Header>
        <Title value="샐러드" />
      </S.Header>
      {storesList.map((item, index) => (
        <StoreList
          key={index}
          Grade={item.Grade}
          StoreName={item.StoreName}
          Rating={item.Rating}
          Delivery={item.Delivery}
        />
      ))}
      <BottomOrderBar />
    </>
  );
};

export default Stores;
