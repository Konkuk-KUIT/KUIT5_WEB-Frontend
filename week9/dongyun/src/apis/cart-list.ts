const API_URL = 'http://localhost:3001/cart-list';

export const getCartList = async (): Promise<any> => {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
}