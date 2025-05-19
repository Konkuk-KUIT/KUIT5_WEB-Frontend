import React from 'react'



import TopBannerIcons from './top_banner_Icons';

import { TopBanner, Time } from './t_banner_style';

const Topbanner = () => {
  return (
    //여기는 div를 styledcomponent로 바꿀 예정
    <TopBanner>
        <Time>9:41</Time>

        <div>
          {/* 아이콘 삽입 예정 */}
          
            <TopBannerIcons/>
         
        </div>
    </TopBanner>
  );
};

export default Topbanner;