import React from 'react';

import AddButton from './addButton';

import styled from "styled-components";

function AddStoreContainer (){
   


    return (
        <StoreContainerStyle>
            <AddButton/>
        </StoreContainerStyle>
  );
};


const StoreContainerStyle=styled.div`
    display:grid;
    gap:5px;
    position:absolute;
    margin-left:25px;
`;

export default AddStoreContainer;