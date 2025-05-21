import styled from "styled-components";

export default function ResetBtn({ onReset }) {
  return <button onClick={onReset}>다시 시작</button>;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
