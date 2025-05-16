import React from 'react';
import { Container } from './Card_styles';
function Card({name,age}){
    return(
        <Container>
            <p>이름: {name}</p>
            <p>나이: {age}</p>
        </Container>
    );
}
export default Card;