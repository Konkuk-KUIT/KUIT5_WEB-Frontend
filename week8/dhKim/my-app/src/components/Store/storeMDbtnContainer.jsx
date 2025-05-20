import React from 'react';

import StoreDeletebtn from './storeDeletebtn';

import StoreMendbtn from './storeMendbtn';

import styled from "styled-components";

const StoreMDbtnContainer = () => {
  return (
    <MDbtnContainerStyle>
        <StoreMendbtn/>
        <StoreDeletebtn/>
    </MDbtnContainerStyle>
  );
};

const MDbtnContainerStyle= styled.div`
    position:absolute;
    right:20px;
    top:30px;
`;


export default StoreMDbtnContainer;