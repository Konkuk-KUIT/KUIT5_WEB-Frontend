import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 59px;
  padding: 26px 298px 2px 24px;
`;

export const review = styled.div`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  width: 390px;
  height: 38px;
  padding: 7px 240px 12px 23px;
`;

export const navStyle = styled.div`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  padding: 9px 152px 1px 24px;
`;

export const BarStyle = styled.div`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  padding: 26px 0 0 24px;
`;
export const StoreListWrapper = styled.div`
  padding-bottom: 100px;
`;

export const StoreItem = styled.div`
  padding: 1rem;
`;

export const StoreContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 8px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CancelButton = styled(Button)`
  background-color: #6c757d;

  &:hover {
    background-color: #5a6268;
  }
`;

export const AddButton = styled(Button)`
  width: 100%;
  padding: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  margin: 20px 0;

  &:hover {
    background-color: #0056b3;
  }
`;