import React from 'react';

import Topbanner from '../common/topbanner/top_banner';

import StoreBody from './store_body';

import Bottombanner from '../common/bottombanner/bottom_banner';

function StoreContainer (){
  return (
    <>
        <Topbanner/>
        <StoreBody/>
        <Bottombanner/>
    </>
  );
};

export default StoreContainer;
