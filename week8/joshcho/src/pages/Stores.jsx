import React, { useState, useEffect } from "react";
import * as S from "./Stores.styles";
import BottomOrderBar from "../components/BottomOrderBar";
import Title from "../components/Title";
import StoreList from "../components/StoreList";
import GoBack from "../components/GoBack";
import ActionButton from "../components/ActionButton";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3001/stores"; // 가게 API 엔드포인트

const Stores = () => {
  const navigate = useNavigate();
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newStoreName, setNewStoreName] = useState(""); // 새로운 가게 이름 입력을 위한 상태
  const [editingStoreId, setEditingStoreId] = useState(null); // 수정 중인 가게 ID
  const [editingStoreName, setEditingStoreName] = useState(""); // 수정 중인 가게 이름

  // 가게 목록 가져오기 (GET)
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // 각 가게 객체에 고유한 id가 없으면 json-server가 자동으로 생성한 id를 사용하도록 key를 id로 변경
        setStores(
          data.map((item) => ({ ...item, id: item.id || item.StoreName }))
        ); // 예시: StoreName을 임시 id로 사용하거나 서버에서 받은 id 사용
      } catch (error) {
        console.error("가게 목록을 가져오는 데 실패했습니다:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []); // 컴포넌트가 처음 마운트될 때만 실행

  // 새로운 가게 추가 (POST)
  const handleAddStore = async () => {
    if (!newStoreName.trim()) return; // 이름이 비어있으면 추가하지 않음

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ StoreName: newStoreName }), // 가게 이름만 전송
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const newStore = await response.json();
      setStores((prevStores) => [...prevStores, newStore]); // 상태 업데이트
      setNewStoreName(""); // 입력 필드 초기화
    } catch (error) {
      console.error("가게 추가 중 오류 발생:", error);
      setError(error);
    }
  };

  // 가게 수정 시작 핸들러
  const handleStartEditing = (store) => {
    setEditingStoreId(store.id);
    setEditingStoreName(store.StoreName);
  };

  // 수정 취소 핸들러
  const handleCancelEditing = () => {
    setEditingStoreId(null);
    setEditingStoreName("");
  };

  // 가게 수정 완료 (PUT)
  const handleUpdateStore = async (id) => {
    if (!editingStoreName.trim()) return; // 이름이 비어있으면 수정하지 않음

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT", // 또는 PATCH 사용 가능
        headers: {
          "Content-Type": "application/json",
        },
        // 수정 가능한 필드만 전송. 여기서는 StoreName만 수정한다고 가정.
        body: JSON.stringify({
          ...stores.find((s) => s.id === id),
          StoreName: editingStoreName,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedStore = await response.json();
      setStores((prevStores) =>
        prevStores.map((store) => (store.id === id ? updatedStore : store))
      ); // 상태 업데이트
      handleCancelEditing(); // 수정 모드 종료
    } catch (error) {
      console.error(`가게 ${id} 수정 중 오류 발생:`, error);
      setError(error);
    }
  };

  // 가게 삭제 (DELETE)
  const handleDeleteStore = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // 삭제 성공 시 상태에서 해당 가게 제거
      setStores((prevStores) => prevStores.filter((store) => store.id !== id)); // 상태 업데이트
    } catch (error) {
      console.error(`가게 ${id} 삭제 중 오류 발생:`, error);
      setError(error);
    }
  };

  const handleClick = () => {
    navigate("/");
  };

  // 로딩 중이거나 에러 발생 시 메시지 표시
  if (loading) {
    return <p>가게 목록 로딩 중...</p>;
  }

  if (error) {
    return <p>가게 목록을 불러오는 데 오류가 발생했습니다: {error.message}</p>;
  }

  return (
    <>
      <GoBack onClick={handleClick} />
      <S.Header>
        <Title value="샐러드" />
      </S.Header>
      {/* 메인 콘텐츠 영역에 하단 패딩 추가 */}
      <div style={{ paddingBottom: "100px" }}>
        {" "}
        {/* BottomOrderBar 높이만큼 패딩 추가 (필요에 따라 조정) */}
        {/* stores 상태를 사용하여 가게 목록 렌더링 */}
        {stores.length === 0 ? (
          <p>가게 목록이 비어있습니다.</p>
        ) : (
          stores.map((item) => (
            <div
              key={item.id || item.StoreName}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #eee",
                padding: "10px 0",
              }}
            >
              {" "}
              {/* flexbox 스타일 적용 */}
              {editingStoreId === item.id ? (
                // 수정 모드
                <div
                  style={{
                    flexGrow: 1,
                    marginRight: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  {/* 입력 필드 영역이 공간을 차지하도록 설정 */}
                  <Input
                    type="text"
                    value={editingStoreName}
                    onChange={(e) => setEditingStoreName(e.target.value)}
                    placeholder="가게 이름 수정"
                    style={{ marginRight: "10px" }}
                  />
                  <ActionButton
                    actiontype="edit"
                    onClick={() => handleUpdateStore(item.id)}
                  >
                    저장
                  </ActionButton>
                  <ActionButton
                    actiontype="default"
                    onClick={handleCancelEditing}
                  >
                    취소
                  </ActionButton>
                </div>
              ) : (
                // 일반 모드
                <>
                  {" "}
                  {/* StoreList와 버튼 div를 감싸는 flex 아이템 */}
                  <div style={{ flexGrow: 1 }}>
                    {" "}
                    {/* StoreList가 공간을 차지하도록 설정 */}
                    <StoreList
                      Grade={item.Grade}
                      StoreName={item.StoreName}
                      Rating={item.Rating}
                      Delivery={item.Delivery}
                    />
                  </div>
                  {/* 수정/삭제 버튼 컨테이너 */}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {" "}
                    {/* 버튼들을 가로로 배치 */}
                    <ActionButton
                      actiontype="edit"
                      onClick={() => handleStartEditing(item)}
                    >
                      수정
                    </ActionButton>
                    <ActionButton
                      actiontype="delete"
                      onClick={() => handleDeleteStore(item.id)}
                    >
                      삭제
                    </ActionButton>
                  </div>
                </>
              )}
            </div>
          ))
        )}
        {/* 가게 추가 입력 필드 및 버튼 */}
        <div
          style={{
            marginTop: "20px",
            padding: "10px 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          {/* 추가 입력 영역 스타일 */}
          <Input
            type="text"
            value={newStoreName}
            onChange={(e) => setNewStoreName(e.target.value)}
            placeholder="새 가게 이름"
            style={{ marginRight: "10px" }}
          />
          <ActionButton actiontype="add" onClick={handleAddStore}>
            가게 추가
          </ActionButton>
        </div>
      </div>{" "}
      {/* 메인 콘텐츠 영역 끝 */}
      <BottomOrderBar />
    </>
  );
};

export default Stores;
