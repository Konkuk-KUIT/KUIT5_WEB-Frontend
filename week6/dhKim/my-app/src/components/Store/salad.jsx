import React from 'react';

import * as S from './salad_style';

function Salad(){
  return (
    <S.SaladContainer>
        
        {/* 여기서는 샐러드를 종류 6개를 배치 */}
        <S.SaladInfo>
            <div style={{width:"54px",height:"54px",borderRadius:"8px",background:"#ECECEC"}}>
            </div>

            <S.SaladTextContainer>
                <S.SaladStoreText>
                    1위<br/>
                    샐로리 한남점
                </S.SaladStoreText>
                <S.SaladStoreSubText>
                    <img src="/imgs/star.svg" alt='star'></img>(3,919)
                    <br/>
                    13분~30분,배달비 2,000원
                </S.SaladStoreSubText>
            </S.SaladTextContainer>
        </S.SaladInfo>
    </S.SaladContainer>  
  );
};

export default Salad;
