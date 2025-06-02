import React, { useState } from "react";

const AddStoreForm = () => {
  const [name, setName] = useState("");
  const [deleteId, setDeleteId] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleDeleteIdChange = (e) => {
    setDeleteId(e.target.value);
  };

  const addStore = () => {
    if (!name.trim()) {
      alert("가게 이름을 입력해주세요.");
      return;
    }

    fetch("http://localhost:3001/store", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        img: "https://placehold.co/54x54",
        rank: "0",
        rating: 0,
        reviews: 0,
        deliveryTime: "15분",
        deliveryFee: 2000,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("추가된 가게:", data);
        alert(`"${data.name}" 가게가 추가되었습니다.`);
        setName("");
      });
  };

  const deleteStore = () => {
    if (!deleteId.trim()) {
      alert("삭제할 가게의 ID를 입력해주세요.");
      return;
    }

    fetch(`http://localhost:3001/store/${deleteId}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        alert(`${deleteId}번 가게가 삭제되었습니다.`);
        setDeleteId("");
      } else {
        alert("삭제 실패: 해당 ID의 가게를 찾을 수 없습니다.");
      }
    });
  };

  return (
    <div>
      <h3>가게 추가</h3>
      <input
        type="text"
        placeholder="가게 이름"
        value={name}
        onChange={handleChange}
      />
      <button onClick={addStore}>추가하기</button>

      <h3>가게 삭제 (ID)</h3>
      <input
        type="number"
        placeholder="삭제할 가게 ID"
        value={deleteId}
        onChange={handleDeleteIdChange}
      />
      <button onClick={deleteStore}>삭제하기</button>
    </div>
  );
};

export default AddStoreForm;
