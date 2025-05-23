import { useState, useEffect } from "react";

const API_URL = "http://localhost:3001/orders";

export const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error("불러오기 실패", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addOrder = async (order) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });
    const newOrder = await res.json();
    setOrders((prev) => [...prev, newOrder]);
  };

  const clearOrders = () => {
    setOrders([]);
  };

  return { orders, addOrder, clearOrders, loading };
};
