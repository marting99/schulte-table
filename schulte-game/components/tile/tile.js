import React from 'react'
import styled from 'styled-components';

const TileBox = styled.div`
background-color:white;
border:none;
border-radius:10%;
box-shadow:0px 0px 8px #888;
width:86px;
height:87px;
text-align:center;
font-weight:bold;
font-size:30px;
margin:0px 2px;
transition: all .2s ease-in-out; 


:hover{
    cursor:pointer;
    box-shadow: 0px 0px 10px #a02515;
    transform: scale(1.02); 
}

`

export default function Tile({number}) {
    function onclick(){
        console.log('CLICKED')
    }
    
    return (
        <TileBox onclick={onclick()}>
            <div className='text' key={number}>
                <p>{number}</p>
            </div>
        </TileBox>
    )
  }