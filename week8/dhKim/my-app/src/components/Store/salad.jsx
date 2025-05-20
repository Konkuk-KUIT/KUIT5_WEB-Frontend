import {React,useState, useEffect } from 'react';

import * as K from './salad_style';

import AddStoreContainer from './addStoreContainer';


import { getSaladStores,deleteStore } from '../../apis/saladStores';
//일단 saladData는 배열이고 여기서 데이터를 추출해 와서 샤용

import StoreMDbtnContainer from './storeMDbtnContainer';

function Salad(){
    const [saladstores,setSaladStores]=useState([]);
    


    useEffect(() => {
    async function fetchData(){
        try{
            const data = await getSaladStores();
            setSaladStores(data);
        }catch(error){
            console.error("샐러드 가게 불러오기 실패", error);
        }
    }

    fetchData();
    }, []);

    return(
    <K.SaladContainer>{
   saladstores.map((data)=>
   (
        <>
        {/* 여기서는 샐러드를 종류 6개를 배치 */}
        <K.SaladInfo key={data.id}>
            <div style={{position:"absolute",top:"16px",left:"24px",
                width:"54px",height:"54px",borderRadius:"8px",background:"#ECECEC"}}>
            </div>

            <K.SaladTextContainer >
                <K.SaladStoreText>
                {
                    (data.id==="1"||data.id==="2"||data.id==="3")&&(
                    <>{data.id}</>
                    )//조건부 렌더링 사용
                }
                </K.SaladStoreText>
                <K.SaladStoreText>
                    {data.name}
                </K.SaladStoreText>
                <K.SaladStoreSubText>
                    <img src="/imgs/star.svg" alt='star'></img>
                    {data.rate}
                    ({data.comments})
                </K.SaladStoreSubText>
                 <K.SaladStoreSubText>
                    {data.del_time},{data.del_price}
                </K.SaladStoreSubText>
                
            </K.SaladTextContainer>
            <StoreMDbtnContainer id={data.id} onDelete={()=>{
                deleteStore(data.id).then(()=>{
                    setSaladStores(prev=>prev.filter(s=>s.id!==data.id));
                }).catch(console.error);
            }}
            />
        </K.SaladInfo>

    </>
    )
    )}

   <AddStoreContainer/> 
   </K.SaladContainer>
);

};

export default Salad;
