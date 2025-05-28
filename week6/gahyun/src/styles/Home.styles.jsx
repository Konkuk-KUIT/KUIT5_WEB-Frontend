import styled from "styled-components";
export const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 390px;
  justify-content: space-between;
  padding: 0px;
`;

export const Main = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
`;

export const HeaderWrapper = styled.div`
  padding-top: 16px;
  padding-bottom: 8px;
`;

export const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
`;
