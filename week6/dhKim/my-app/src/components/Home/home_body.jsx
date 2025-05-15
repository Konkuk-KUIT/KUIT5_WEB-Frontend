import React from 'react';

import Hometext from './home_text';

import Homemenu from './home_menu';

import styled from 'styled-components';

const Homebody = () => {
  return (
    <HomebodyContainer>
    <Hometext/>
    <Homemenu/>
    </HomebodyContainer>
  );
};

export default Homebody;

const HomebodyContainer= styled.div`
    position:absolute;
    margin-top:0px;
    padding: 0px;
    top:88px;
    
`;