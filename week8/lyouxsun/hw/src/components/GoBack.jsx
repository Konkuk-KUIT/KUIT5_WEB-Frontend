import styled from "styled-components";

const GoBack = ({ value, onClick }) => {
  return (
    <GoBackWrap>
      <GoBackStyle onClick={onClick}>
        <img src="/assets/left_chevron.svg" alt="뒤로가기" width="24px" height="24px" />
      </GoBackStyle>
      <GoBackText>{value}</GoBackText>
    </GoBackWrap>
  );
};

const GoBackStyle = styled.div`
  display: flex;
  align-items: center;
`;

const GoBackText = styled.div`
  color: #333d4b;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;

const GoBackWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
`;

export default GoBack;
