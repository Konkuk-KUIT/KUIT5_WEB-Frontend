import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px 0;
  position: relative;

  & .menuInfo {
    color: #6b7684;
    margin-bottom: 5px;
    max-width: 70%;
  }

  & .menuName {
    color: #333d4b;
  }
`;
const MenuImg = styled.div`
  background-color: #ececec;
  width: 54px;
  height: 54px;
  border-radius: 50%;
`;
const ChooseButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
const Best = styled.span`
  color: #3182f6;
  font-weight: 600;
  margin-left: 6px;
`;

type Menu = {
  name: string;
  isBest: boolean;
  price: number;
  ingredient: string;
  id: string;
};

function MenuItem({ item }: { item: Menu }) {
  return (
    <Container>
      <MenuImg />
      <div>
        <p className="menuName">
          {item.name}
          {item.isBest && <Best>Best</Best>}
        </p>
        <p className="menuInfo">{item.price.toLocaleString()}원</p>
        <p className="menuInfo">{item.ingredient}</p>
      </div>
      <ChooseButton value="담기" />
    </Container>
  );
}

export default MenuItem;
