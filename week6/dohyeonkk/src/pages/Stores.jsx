import React from 'react'
import styled from "styled-components"

import TitleBar from '../components/TitleBar'
import StoreDetail from '../components/StoreDetail'
import Orderbar from '../components/Orderbar'

const MainContainer = styled.div`
    width: 390px;
`;


const Stores = () => {
  return (
    <MainContainer>
        <div style={{height: "41px"}}>
            <img style={{margin:"10px"}} src='/img/backarrow.svg' alt='backarrow'/>
        </div>
        <TitleBar text={"샐러드"}/>

        <StoreDetail rank={1} name={"샐로리 한남점"} rate={"4.9"}  count={"3,919"} time={"13분~30분"} fee={"2,000"}/>
        <StoreDetail rank={2} name={"옐로우푸드 샐러드"} rate={"4.8"}  count={"1,129"} time={"13분~30분"} fee={"2,000"}/>
        <StoreDetail rank={3} name={"씬더볼드 한남점"} rate={"4.8"}  count={"919"} time={"13분~30분"} fee={"2,000"}/>
        <StoreDetail rank={0} name={"THE 샐러드가득담은"} rate={"5.0"}  count={"27"} time={"13분~30분"} fee={"2,000"}/>
        <StoreDetail rank={0} name={"파스토보이"} rate={"4.8"}  count={"801"} time={"13분~30분"} fee={"2,000"}/>
        <StoreDetail rank={0} name={"힘난다 샐러드"} rate={"4.1"}  count={"24"} time={"13분~30분"} fee={"2,000"}/>

        <Orderbar/>

    </MainContainer>
  )
}

export default Stores
