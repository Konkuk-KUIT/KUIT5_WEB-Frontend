import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px 0;
  position: relative;
  & p {
    color: #6b7684;
    margin-bottom: 5px;
    max-width: 70%;
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

function MenuItem({ item }) {
  return (
    <Container>
      <MenuImg />
      <div>
        <p style={{ color: "#333d4b" }}>
          {item.name}
          {item.isBest && <Best>Best</Best>}
        </p>
        <p>{item.price.toLocaleString()}원</p>
        <p>{item.ingredient}</p>
      </div>
      <ChooseButton value="담기" />
    </Container>
  );
}

export default MenuItem;
