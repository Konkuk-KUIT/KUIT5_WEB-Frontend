import React from 'react';

import Topbanner from '../common/topbanner/top_banner';

import Bottombanner from '../common/bottombanner/bottom_banner';

import Homebody from './home_body';

import styled from 'styled-components';

const Container=styled.div`
  width:390px;
  height: 844px;
  box-sizing: border-box;
  margin-top:30px;
`;


const HomeContainer = () => {
  return (
    <Container>
    <Topbanner/>
    <Homebody/>
    <Bottombanner/>
    </Container>
  );
};

export default HomeContainer;
 