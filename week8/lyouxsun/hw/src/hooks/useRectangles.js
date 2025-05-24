import { useState, useEffect } from "react";

const API_URL = "http://localhost:3001/rectangles";

export const useRectangles = () => {
  const [rectangles, setRectangles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRectangles = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setRectangles(data);
      } catch (err) {
        console.error("RectangleList 불러오기 실패:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRectangles();
  }, []);

  return { rectangles, loading };
};