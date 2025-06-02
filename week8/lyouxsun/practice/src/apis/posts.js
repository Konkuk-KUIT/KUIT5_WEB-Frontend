const API_URL = "http://localhost:3001/posts";

export const getPosts = async () => {
    const res = await fetch(API_URL);    // HTTP Method 따로 지정 안해주면 default 설정인 GET으로 설정된다.
    if (!res.ok) 
        throw new Error("불러오기 실패");
    return await res.json();
};

export const createPost = async (title) => {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title}),
    }); 
    if (!res.ok) 
        throw new Error("불러오기 실패");
    return await res.json();
};