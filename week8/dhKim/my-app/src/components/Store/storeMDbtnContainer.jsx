import React from 'react';

import StoreDeletebtn from './storeDeletebtn';

import StoreMendbtn from './storeMendbtn';

import styled from "styled-components";

const StoreMDbtnContainer = ({id,onDelete,onEdit}) => {
  return (
    <MDbtnContainerStyle>
        <StoreMendbtn id={id} onClick={onEdit}/>
        <StoreDeletebtn onDelete={onDelete}/>
    </MDbtnContainerStyle>
  );
};

const MDbtnContainerStyle= styled.div`
    position:absolute;
    right:20px;
    
`;


export default StoreMDbtnContainer;