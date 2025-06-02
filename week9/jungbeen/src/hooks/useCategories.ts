import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001/categories";

type Category = {
  name: string;
  imgName: string;
  id: string;
};

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setCategories(data);
      } catch (e) {
        console.error("카테고리 정보 호출 실패", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { categories, loading };
};
