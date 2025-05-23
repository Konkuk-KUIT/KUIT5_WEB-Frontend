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
  // 새로운 가게 정보 입력을 위한 상태
  const [newStore, setNewStore] = useState({
    Grade: "",
    StoreName: "",
    Rating: "",
    Delivery: "",
  });
  // 수정 중인 가게 정보 상태
  const [editingStoreId, setEditingStoreId] = useState(null);
  const [editingStore, setEditingStore] = useState(null);

  // 가게 목록 가져오기 (GET) 및 정렬
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // 등수(Grade)를 기준으로 정렬
        const sortedStores = data.sort((a, b) => {
          // "N위" 형태의 문자열에서 숫자만 추출하여 비교
          const gradeA = parseInt(a.Grade.replace("위", "")) || Infinity; // 숫자가 아니면 무한대로 처리하여 뒤로 보냄
          const gradeB = parseInt(b.Grade.replace("위", "")) || Infinity;
          return gradeA - gradeB;
        });
        // 각 가게 객체에 고유한 id가 없으면 json-server가 자동으로 생성한 id를 사용하도록 key를 id로 변경
        setStores(
          sortedStores.map((item) => ({
            ...item,
            id: item.id || item.StoreName,
          }))
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

  // 새로운 가게 입력 필드 변경 핸들러
  const handleNewInputChange = (e) => {
    const { name, value } = e.target;
    setNewStore({ ...newStore, [name]: value });
  };

  // 새로운 가게 추가 (POST)
  const handleAddStore = async () => {
    // 필수 필드(예: StoreName) 검증
    if (!newStore.StoreName.trim()) return;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStore), // 새로운 가게 정보를 모두 전송
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const addedStore = await response.json();
      // 새로운 가게를 추가한 후 다시 목록을 가져와 정렬
      // 또는 추가된 가게를 기존 목록에 추가하고 정렬
      // 여기서는 간단하게 새로고침하는 방식을 사용 (실제 앱에서는 데이터 가져오는 로직 재사용 고려)
      // fetchStores(); // 이렇게 하면 전체 목록을 다시 가져옴

      // 또는 추가된 항목만 상태에 반영하고 정렬
      setStores((prevStores) => {
        const updatedStores = [
          ...prevStores,
          { ...addedStore, id: addedStore.id || addedStore.StoreName },
        ];
        return updatedStores.sort((a, b) => {
          const gradeA = parseInt(a.Grade.replace("위", "")) || Infinity;
          const gradeB = parseInt(b.Grade.replace("위", "")) || Infinity;
          return gradeA - gradeB;
        });
      });
      setNewStore({ Grade: "", StoreName: "", Rating: "", Delivery: "" }); // 입력 필드 초기화
    } catch (error) {
      console.error("가게 추가 중 오류 발생:", error);
      setError(error);
    }
  };

  // 가게 수정 시작 핸들러
  const handleStartEditing = (store) => {
    setEditingStoreId(store.id);
    setEditingStore({ ...store }); // 수정 중인 가게 정보 상태 설정
  };

  // 수정 입력 필드 변경 핸들러
  const handleEditingInputChange = (e) => {
    const { name, value } = e.target;
    setEditingStore({ ...editingStore, [name]: value });
  };

  // 수정 취소 핸들러
  const handleCancelEditing = () => {
    setEditingStoreId(null);
    setEditingStore(null);
  };

  // 가게 수정 완료 (PUT)
  const handleUpdateStore = async () => {
    if (!editingStore || !editingStore.StoreName.trim()) return;

    try {
      const response = await fetch(`${API_URL}/${editingStore.id}`, {
        method: "PUT", // 또는 PATCH 사용 가능
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editingStore), // 수정된 가게 정보를 모두 전송
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedStore = await response.json();
      // 수정된 가게를 상태에 반영하고 정렬
      setStores((prevStores) => {
        const updatedStores = prevStores.map((store) =>
          store.id === updatedStore.id ? updatedStore : store
        );
        return updatedStores.sort((a, b) => {
          const gradeA = parseInt(a.Grade.replace("위", "")) || Infinity;
          const gradeB = parseInt(b.Grade.replace("위", "")) || Infinity;
          return gradeA - gradeB;
        });
      }); // 상태 업데이트 및 정렬
      handleCancelEditing(); // 수정 모드 종료
    } catch (error) {
      console.error(`가게 ${editingStore.id} 수정 중 오류 발생:`, error);
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

      // 삭제 성공 시 상태에서 해당 가게 제거하고 정렬
      setStores((prevStores) => {
        const updatedStores = prevStores.filter((store) => store.id !== id);
        return updatedStores.sort((a, b) => {
          const gradeA = parseInt(a.Grade.replace("위", "")) || Infinity;
          const gradeB = parseInt(b.Grade.replace("위", "")) || Infinity;
          return gradeA - gradeB;
        });
      }); // 상태 업데이트 및 정렬
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
      <S.Header>
        <GoBack onClick={handleClick} />
        <Title value="샐러드" />
      </S.Header>

      <div style={{ paddingTop: "59px", paddingBottom: "100px" }}>
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
              {editingStoreId === item.id && editingStore ? (
                // 수정 모드
                <div
                  style={{
                    flexGrow: 1,
                    marginRight: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  {" "}
                  {/* 컬럼 방향 정렬 및 간격 추가 */}
                  <Input
                    type="text"
                    name="Grade" // name 속성 추가
                    value={editingStore.Grade}
                    onChange={handleEditingInputChange}
                    placeholder="등수 (예: 1위)"
                  />
                  <Input
                    type="text"
                    name="StoreName" // name 속성 추가
                    value={editingStore.StoreName}
                    onChange={handleEditingInputChange}
                    placeholder="가게 이름"
                  />
                  <Input
                    type="text"
                    name="Rating" // name 속성 추가
                    value={editingStore.Rating}
                    onChange={handleEditingInputChange}
                    placeholder="평점 (예: 4.9 (3,919))"
                  />
                  <Input
                    type="text"
                    name="Delivery" // name 속성 추가
                    value={editingStore.Delivery}
                    onChange={handleEditingInputChange}
                    placeholder="배달 시간 및 비용 (예: 13분~30분 ∙ 배달비 2,000원)"
                  />
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    {" "}
                    {/* 버튼들을 오른쪽으로 정렬 */}
                    <ActionButton actiontype="edit" onClick={handleUpdateStore}>
                      저장
                    </ActionButton>
                    <ActionButton
                      actiontype="default"
                      onClick={handleCancelEditing}
                    >
                      취소
                    </ActionButton>
                  </div>
                </div>
              ) : (
                // 일반 모드
                <>
                  <div style={{ flexGrow: 1 }}>
                    <StoreList
                      Grade={item.Grade}
                      StoreName={item.StoreName}
                      Rating={item.Rating}
                      Delivery={item.Delivery}
                    />
                  </div>
                  {/* 수정/삭제 버튼 컨테이너 */}
                  <div style={{ display: "flex", alignItems: "center" }}>
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
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {" "}
          {/* 컬럼 방향 정렬 및 간격 추가 */}
          <h3>새 가게 추가</h3> {/* 제목 추가 */}
          <Input
            type="text"
            name="Grade" // name 속성 추가
            value={newStore.Grade}
            onChange={handleNewInputChange}
            placeholder="등수 (예: 1위)"
          />
          <Input
            type="text"
            name="StoreName" // name 속성 추가
            value={newStore.StoreName}
            onChange={handleNewInputChange}
            placeholder="새 가게 이름"
          />
          <Input
            type="text"
            name="Rating" // name 속성 추가
            value={newStore.Rating}
            onChange={handleNewInputChange}
            placeholder="평점 (예: 4.9 (3,919))"
          />
          <Input
            type="text"
            name="Delivery" // name 속성 추가
            value={newStore.Delivery}
            onChange={handleNewInputChange}
            placeholder="배달 시간 및 비용 (예: 13분~30분 ∙ 배달비 2,000원)"
          />
          <ActionButton actiontype="add" onClick={handleAddStore}>
            가게 추가
          </ActionButton>
        </div>
      </div>

      <BottomOrderBar />
    </>
  );
};

export default Stores;
