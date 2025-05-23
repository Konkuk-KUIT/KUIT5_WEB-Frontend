import { useState, useEffect } from "react";

const API_URL = "http://localhost:3001/stores";

export const useStores = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    Grade: "",
    StoreName: "",
    Rating: "",
    Delivery: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setStores(data);
      } catch (err) {
        console.error("Stores 불러오기 실패:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (editingId) {
      updateStore(editingId, form);
      setEditingId(null);
    } else {
      addStore(form);
    }
    setForm({ Grade: "", StoreName: "", Rating: "", Delivery: "" });
  };

  const handleEdit = (store) => {
    setEditingId(store.id);
    setForm({
      Grade: store.Grade,
      StoreName: store.StoreName,
      Rating: store.Rating,
      Delivery: store.Delivery,
    });
  };

  const handleCancel = () => {
    setEditingId(null);
    setForm({ Grade: "", StoreName: "", Rating: "", Delivery: "" });
  };

  const addStore = async (store) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(store),
      });
      const newStore = await res.json();
      setStores((prev) => [...prev, newStore]);
    } catch (err) {
      console.error("가게 추가 실패:", err);
    }
  };

  const updateStore = async (id, updatedStore) => {
    try {
      const storeWithId = { ...updatedStore, id };
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(storeWithId),
      });
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const updated = await res.json();
      setStores((prev) =>
        prev.map((store) => (store.id === id ? updated : store))
      );
    } catch (err) {
      console.error("가게 수정 실패:", err);
      setStores((prev) =>
        prev.map((store) => (store.id === id ? { ...store, ...updatedStore } : store))
      );
    }
  };

  const deleteStore = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      setStores((prev) => prev.filter((store) => store.id !== id));
    } catch (err) {
      console.error("가게 삭제 실패:", err);
    }
  };

  return {
    stores,
    loading,
    form,
    editingId,
    handleChange,
    handleSubmit,
    handleEdit,
    handleCancel,
    addStore,
    updateStore,
    deleteStore,
  };
};