import styled from "styled-components";

export const Seperator = styled.div`
    width: 390px;
    height: 16px;
    background: #F2F4F6;
`

export const StoreCartHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 390px;
    height: 58px;
    padding: 26px 24px 24px 12px;
    box-sizing: border-box;
`;

export const StoreCartName = styled.div`
    color: #6b7684;
    font-size: 17px;
    font-family: Pretendard, serif;
    font-weight: 700;
    word-wrap: break-word;
`;

export const WarningMinOrder = styled.div`
    color: #f04452;
    font-size: 15px;
    font-family: Pretendard, serif;
    font-weight: 500;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    word-wrap: break-word;
`;

export const WarningMinOrderIcon = styled.img`
    width: 13px;
    height: 13px;
    flex-shrink: 0;
    margin-left: 6px;
`;

export const AddMoreCart = styled.div`
    width: 390px;
    height: 60px;
    border-top: 1px solid #e5e8eb;
    color: #3182f6;
    font-size: 17px;
    font-family: Pretendard, serif;
    font-weight: 600;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    word-wrap: break-word;
`;

export const AddMoreCartIcon = styled.img`
    width: 12px;
    height: 12px;
    flex-shrink: 0;
    margin-left: 3px;
`;

export const CostInfoSet = styled.div`
    display: flex;
    flex-direction: column;
    width: 390px;
    box-sizing: border-box;
    padding: 16px 23px 17px 24px;
`;

export const CostOrder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 8px;
    padding-bottom: 10px;
`;

export const CostItem = styled.div`
    color: #8b95a1;
    font-size: 17px;
    font-family: Pretendard, serif;
    font-weight: 500;
    word-wrap: break-word;
`;

export const CostAmount = styled.div`
    color: #505967;
    font-size: 17px;
    font-family: Pretendard, serif;
    font-weight: 500;
    word-wrap: break-word;
`;

export const TotalCostOrder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 16px;
    padding-bottom: 18px;
`;

export const TotalCostItem = styled.div`
    color: #4e5968;
    font-size: 17px;
    font-family: Pretendard, serif;
    font-weight: 500;
    word-wrap: break-word;
`;

export const TotalCostAmount = styled.div`
    color: #4e5968;
    font-size: 17px;
    font-family: Pretendard, serif;
    font-weight: 600;
    word-wrap: break-word;
`;

export const NavMinOrder = styled.div`
    width: 165px;
    height: 20px;
    margin: 222px 112px 19px 112px;
    text-align: center;
    justify-content: center;
    color: #6b7684;
    font-size: 17px;
    font-family: Pretendard, serif;
    font-weight: 500;
    word-wrap: break-word;
`;

export const PurchaseButton = styled.button`
    width: 350px;
    height: 56px;
    background: #d0dffb;
    border-radius: 16px;
    text-align: center;
    justify-content: center;
    color: white;
    font-size: 16px;
    font-family: Pretendard, serif;
    font-weight: 600;
    word-wrap: break-word;
    border: none;

    position: relative;
    bottom: 3px;
    left: 20px;
    right: 20px;
`;

export const AddingContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    height: 170px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 300px;
    
`;

export const ItemNameInput = styled.input`
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;

  &:focus {
    border-color: #3182f6;
    outline: none;
  }
`;

export const ItemIngredInput = styled.input`
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;

  &:focus {
    border-color: #3182f6;
    outline: none;
  }
`;

export const ItemCountInput = styled.input`
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;

  &:focus {
    border-color: #3182f6;
    outline: none;
  }
`;

export const AddCartButton = styled.button`
    width: 52px;
    height: 90%;
    display: inline-flex;
    padding: 8px 14px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 8px;
    background: #3182f6;
    color: #fff;
    font-size: 13px;
    font-family: Pretendard, serif;
    font-weight: 500;
    word-wrap: break-word;
    cursor: pointer;
`