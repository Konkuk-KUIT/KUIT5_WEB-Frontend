import React from 'react';

import Topbanner from '../common/topbanner/top_banner';

import StoreBody from './store_body';

import Bottombanner from '../common/bottombanner/bottom_banner';

import Chevroncontainer from './chevron_container'; 



import GlobalStyles from '../common/GlobalStyle';
function StoreContainer (){
  return (
    <>
        
        <Topbanner/>
        <Chevroncontainer/>
        <StoreBody/>    
        <Bottombanner/>
    </>
  );
};

export default StoreContainer;
