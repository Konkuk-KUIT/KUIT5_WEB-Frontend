import styled from "styled-components";

const Content = styled.div`
  display: flex;
  gap: 17px;
  padding: 19px 24px;
  position: relative;

  & p {
    max-width: 80%;
  }
  & .marginBottom {
    margin-bottom: 5px;
  }
  & .infoColor {
    color: #6b7684;
  }
  & .menuName {
    font-weight: 700;
    font-size: 17px;
    color: #333d4b;
    margin-bottom: 5px;
  }
`;
const MenuImg = styled.div`
  background-color: #ececec;
  height: 54px;
  width: 54px;
  border-radius: 8px;
  margin-top: 8px;
`;
const Detail = styled.span`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7684;
`;

function CartList() {
  return (
    <Content>
      <MenuImg></MenuImg>
      <div>
        <p className="marginBottom menuName">토마토 샐러드</p>
        <p className="marginBottom infoColor">
          계란, 옥수수, 양파, 올리브, 베이컨, 시저드레싱
        </p>
        <p className="infoColor">10,600원</p>
      </div>
      <Detail>1개 &gt;</Detail>
    </Content>
  );
}

export default CartList;
