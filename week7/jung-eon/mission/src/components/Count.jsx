import styled from "styled-components";

export default function Count({ count }) {
  return (
    <CountDiv>
      <div>맞힌 개수 {count} / 5</div>
      <div>{count === 5 ? "🎉 정답입니다!" : ""}</div>
    </CountDiv>
  );
}

const CountDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 1.2rem;
  margin-bottom: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;
