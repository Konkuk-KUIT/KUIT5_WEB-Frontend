import React, { useState } from 'react'
import styled from "styled-components"


const API_URL = "http://localhost:3001/store";

const MainDiv = styled.div`
    font-family: "Pretendard";
    display: flex;
    flex-direction: row;
    gap: 18px;
    padding: 16px 0 ;
    padding-left: 24px;
    p{
        margin: 0;
    }
`;
const FontBold = styled.p`
    font-weight: 600;
    font-size: 17px;
    color: #333d3b;
    margin: 0;
`;
const FontLight = styled.p`
    color:#6b7684;
    font-size: 13px;
    font-weight: 500;
    margin: 0;
`;

const TextDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap:2px
`;

const TextAlign = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;

const StoreDetail = ({ id, rank, name, rate, count, time, fee }) => {

  const [edit, setEdit] = useState(name);
  const [editing, setEditing] = useState(false);

  const deleteStore = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });


  };

  const editStore = async () => {
    await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: edit })
    });
    setEditing(false);
  };


  const handleKeyDown = (e) => {
    if (e.key === 'Enter')
      editStore();
  };

  return (
    <MainDiv>
      <img style={{ borderRadius: "8px", width: "54px", height: "54px" }} src={"http://placehold.co/54x54"} alt="placeholder" />
      <TextAlign>
        {(rank !== 0) && <FontBold>{rank}위</FontBold>}
        {(editing ? (<input value={edit} onChange={e => setEdit(e.target.value)} onKeyDown={handleKeyDown} />
        ) : (<FontBold>{name}</FontBold>
        ))}


        <TextDiv>
          <img src='/img/star.svg' alt='rate' />
          <FontLight>{rate}</FontLight>
          <FontLight>({count})</FontLight>
        </TextDiv>
        <FontLight>
          {time} · 배달비 {fee}원
        </FontLight>
      </TextAlign>
      <TextAlign>
        <button onClick={() => deleteStore(id)}>❌</button>
        <button onClick={()=>{setEditing(true)}}>✏️</button>

      </TextAlign>
    </MainDiv>
  )
}

export default StoreDetail
