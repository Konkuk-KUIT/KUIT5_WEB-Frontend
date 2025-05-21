import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001/stores";

export const useStores = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setStores(data);
      } catch (e) {
        console.error("가게 정보 호출 실패", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { stores, loading };
};
