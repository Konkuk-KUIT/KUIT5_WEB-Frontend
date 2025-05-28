import { useState, useEffect } from "react";

const API_URL = "http://localhost:3001/menus";

export const useMenus = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setMenus(data);
      } catch (err) {
        console.error("Menus 불러오기 실패:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return { menus, loading };
};