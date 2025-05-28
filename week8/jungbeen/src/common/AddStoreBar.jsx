import styled from "styled-components";
import { useState } from "react";

const AddForm = styled.form`
  margin-bottom: 250px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
const AddInput = styled.input`
  border: 1px solid black;
  border-radius: 8px;
  height: 50px;
`;
const FormButton = styled.button`
  height: 50px;
  font-size: 24px;
  border-radius: 8px;
  flex: 1;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

function AddStoreBar({ className, setIsadding, addStore }) {
  const [name, setName] = useState("");
  const [rideTip, setRideTip] = useState("");
  const [paymethod, setPaymethod] = useState("");
  const [minOrder, setMinOrder] = useState("");

  const handleAddButton = async () => {
    if (name && rideTip && paymethod && minOrder) {
      await addStore(name, rideTip, paymethod, minOrder);
      setIsadding(false);
    }
  };

  return (
    <AddForm className={className}>
      <AddInput
        type="text"
        placeholder="가게명"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <AddInput
        type="number"
        placeholder="배달비"
        value={rideTip}
        onChange={(e) => {
          setRideTip(e.target.value);
        }}
      />
      <AddInput
        type="text"
        placeholder="결제방법"
        value={paymethod}
        onChange={(e) => {
          setPaymethod(e.target.value);
        }}
      />
      <AddInput
        type="number"
        placeholder="최소 주문 금액"
        value={minOrder}
        onChange={(e) => {
          setMinOrder(e.target.value);
        }}
      />
      <ButtonWrapper style={{ display: "flex", gap: "5px" }}>
        <FormButton type="button" onClick={handleAddButton}>
          확인
        </FormButton>
        <FormButton
          type="button"
          onClick={async () => {
            setIsadding(false);
          }}
        >
          취소
        </FormButton>
      </ButtonWrapper>
    </AddForm>
  );
}
export default AddStoreBar;
