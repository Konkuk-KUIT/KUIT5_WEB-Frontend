import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import BlueButton from './Button'
import styled from "styled-components"
import Stores from '../pages/Stores'

const MainDiv = styled.div`
    background-color: white;
    align-items: center;
    justify-content: space-between;
    height: 77px;
    width: 342px;
    position: fixed;
    border-radius: 16px 16px 0 0 ;
    box-shadow: 0px -8px 16px 0 rgba(0,0,0,0.10);
    bottom: 0;
    display: flex;
    padding: 0 24px;
    font-family: "Pretendard";
    p{
        margin: 0;
    }
`;
const SubDiv = styled.div`
    display: flex;
    gap: 4px;
    flex-direction: column;
`


const Orderbar = ({onSubmit}) => {
    const [name,setName] = useState("");

    const handleClick=()=>{
        onSubmit(name);
        setName("");
    }

    return (
        <MainDiv>
            <SubDiv>
                <input type='text' value={name} onChange={(e)=> setName(e.target.value)}></input>
            </SubDiv>
            {/* <Link to='/store'> */}
                <BlueButton onClick={handleClick}>추가하기</BlueButton>
            {/* </Link> */}
        </MainDiv>
    )
}

export default Orderbar
