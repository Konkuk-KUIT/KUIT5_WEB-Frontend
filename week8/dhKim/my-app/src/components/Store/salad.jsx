import {React,useState, useEffect } from 'react';

import * as S from './salad_style';

import AddStoreContainer from './addStoreContainer';


import { getSaladStores } from '../../apis/saladStores';
//일단 saladData는 배열이고 여기서 데이터를 추출해 와서 샤용

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
    <S.SaladContainer>{
   saladstores.map((data)=>
   (
        <>
        {/* 여기서는 샐러드를 종류 6개를 배치 */}
        <S.SaladInfo key={data.id}>
            <div style={{position:"absolute",top:"16px",left:"24px",
                width:"54px",height:"54px",borderRadius:"8px",background:"#ECECEC"}}>
            </div>

            <S.SaladTextContainer >
                <S.SaladStoreText>
                {
                    (data.id==="1"||data.id==="2"||data.id==="3")&&(
                    <>{data.id}</>
                    )//조건부 렌더링 사용
                }
                </S.SaladStoreText>
                <S.SaladStoreText>
                    {data.name}
                </S.SaladStoreText>
                <S.SaladStoreSubText>
                    <img src="/imgs/star.svg" alt='star'></img>
                    {data.rate}
                    ({data.comments})
                </S.SaladStoreSubText>
                 <S.SaladStoreSubText>
                    {data.del_time},{data.del_price}
                </S.SaladStoreSubText>
            </S.SaladTextContainer>
        </S.SaladInfo>

    </>
    )
    )}

   <AddStoreContainer/> 
   </S.SaladContainer>
);

};

export default Salad;
