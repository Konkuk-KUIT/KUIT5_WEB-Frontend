import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001/menus";

export const useMenus = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setMenus(data);
      } catch (e) {
        console.error("메뉴 정보 호출 실패", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { menus, loading };
};
