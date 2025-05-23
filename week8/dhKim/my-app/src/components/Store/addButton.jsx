import {React,useState} from 'react';

import { createStore,getSaladStores } from '../../apis/saladStores';

function AddButton (){
    const [stores,setStores]=useState([]);
    const [storeName,setStoreName]=useState('');
    const [rate,setRate]=useState('');
    const [reviews,setReviews]=useState('');
    const [deltime,setDeltime]=useState('');
    const [delfee,setDelfee]=useState('');

    
    const handleSubmit=()=>{
        
        const newStore={
            name: storeName,
            rate: rate,
            comments: reviews,
            del_time: deltime,
            del_price: delfee,
        };

        createStore(newStore)
            .then((createdStore)=>{
                setStores((prev)=>[...prev,createdStore]);
                //입력창 초기화
                setStoreName('');
                setRate('');
                setReviews('');
                setDeltime('');
                setDelfee('');
            })
            .catch(console.error);
    };
  return (
    <>
        <input type='text' value={storeName} 
        onChange={(e)=>setStoreName(e.target.value)} 
        placeholder='가게이름'></input>
        
        <input type='text' value={rate}
        onChange={(e)=>setRate(e.target.value)} 
        placeholder='평점'></input>

        <input type='text' value={reviews}
        onChange={(e)=>setReviews(e.target.value)} 
        placeholder='리뷰개수'></input>

        <input type='text' value={deltime}
        onChange={(e)=>setDeltime(e.target.value)} 
        placeholder='배달시간'></input>

        <input type='text' value={delfee}
        onChange={(e)=>setDelfee(e.target.value)} 
        placeholder='배달비'></input>

        <button type='button' onClick={handleSubmit}>추가</button>
    </>
  );
};

export default AddButton;