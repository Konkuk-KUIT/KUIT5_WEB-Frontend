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

export const deleteStore= async(id)=>{
    const res= await fetch(`${API_URL}/${id}`,{
        method: 'DELETE',
    });
    if(!res.ok) throw new Error('삭제 실패');
};

export const updateStore =async(id,updatedData)=>{
    const res=await fetch(`${API_URL}/${id}`,{
        method:'PATCH',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(updatedData),
    });
    if(!res.ok)throw new Error('수정 실패');
    return await res.json();
}