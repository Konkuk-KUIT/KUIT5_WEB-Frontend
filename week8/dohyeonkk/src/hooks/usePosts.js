import React,{useState,useEffect} from 'react'

const API_URL = "http://localhost:3001/store";

export const usePosts = () => {
    const [store, setStore] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(API_URL);
                const data = await res.json();
                setStore(data);
            } catch (err) {
                console.error("fail", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    });

    const addStore = async (rank,name,rate,count,time,fee) => {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rank,name,rate,count,time,fee }),
        });

        const newStore = await res.json();
        setStore((prev) => [...prev, newStore]);
    };

    

    return { store, addStore, loading };

}