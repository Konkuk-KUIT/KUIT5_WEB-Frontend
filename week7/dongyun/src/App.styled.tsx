import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const NavBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
`

export const CardGame = styled.div`
    display: grid;
    align-items: center;
    gap: 10px;
    grid-template-columns: repeat(5, 1fr);
    margin-left: 100px;
    margin-right: 100px;
`
export const ResetBtn = styled.button`
    width: 300px;
    height: 100px;
    text-align: center;
    font-size: 24px;
    margin: 50px;
    border: none;
    border-radius: 5px;
`

export const Reward = styled.div`
    width: 700px;
    height: 400px;
    line-height: 200px;
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    margin: 50px;
    border: none;
    border-radius: 5px;
    background: antiquewhite;
    
    position: absolute;
    top: 8%;
    left: 30%;
    z-index: 1;
`