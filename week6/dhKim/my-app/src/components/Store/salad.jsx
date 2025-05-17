import React from 'react';

import * as S from './salad_style';

import { saladData } from './salad_data';

//일단 saladData는 배열이고 여기서 데이터를 추출해 와서 샤용

function Salad(){
    return(
   saladData.map((data)=>
   (
    <S.SaladContainer>
        
        {/* 여기서는 샐러드를 종류 6개를 배치 */}
        <S.SaladInfo>
            <div style={{width:"54px",height:"54px",borderRadius:"8px",background:"#ECECEC"}}>
            </div>

            <S.SaladTextContainer>
                <S.SaladStoreText key={data.number}>
                    {data.number}<br/>
                    {data.name}
                </S.SaladStoreText>
                <S.SaladStoreSubText>
                    <img src="/imgs/star.svg" alt='star'></img>
                    {data.rate}
                    ({data.comments})
                    <br/>
                    {data.del_time},{data.del_price}
                </S.SaladStoreSubText>
            </S.SaladTextContainer>
        </S.SaladInfo>
    </S.SaladContainer>  
    )
    )
);
};

export default Salad;
