import React,{useState} from 'react';

import styled from 'styled-components';

const Foods = () => {
  const [foods]=useState([
    {name:"피자" ,image:"/imgs/pizza.svg"},
    {name:"샐러드",image:"/imgs/salad.svg"},
    {name:"햄버거",image:"/imgs/hamburger.svg"},
    {name:"한식",image:"/imgs/kfood.svg"},
    {name:"분식",image:"/imgs/spice.svg"},
    {name:"치킨",image:"/imgs/chicken.svg"},
    {name:"초밥",image:"/imgs/sushi.svg"},
    {name:"샌드위치",image:"/imgs/sandwitch.svg"},
    {name:"파스타",image:"/imgs/pasta.svg"},
    {name:"디저트",image:"/imgs/donut.svg"},
    {name:"커피",image:"/imgs/coffee.svg"},
    {name:"더보기",image:"/imgs/toggle.svg"},
  ]);

  return (
    <GridContainer>
      {foods.map((food,index)=>(
        <Item key={index}>
          <img 
          style={{marginTop:"14px"}}
          src={food.image} alt={food.name} 
          width="28" height="28"/>
          <p style={{margin:"5px"}}>{food.name}</p>
        </Item>
      ))}
    </GridContainer>
  );
};

const GridContainer=styled.div`
  width:342px;
  height:326px;
  display:grid;
  grid-template-columns: repeat(3,1fr);
  gap: 9px;
  
  margin: 10px 21px;

  position: absolute;
  top: 150px;

`;


const Item=styled.div`
  width:108px;
  height:74px;
 
 background: #FAFAFB;
;

  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Pretendard;
  font-weight: 600;
  font-size:14px;
  


`;

export default Foods;
