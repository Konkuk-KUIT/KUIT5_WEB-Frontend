const API_URL = "http://localhost:4000/saladStores";

export const getSaladStores = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("불러오기 실패!!");
  return res.json();
};

export const createStore=async(store)=>{
    const res=await fetch(API_URL,{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(store),

    });

    if(!res.ok) throw new Error('추가 실패');
    return await res.json();
};