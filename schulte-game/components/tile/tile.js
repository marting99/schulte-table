import React, { useEffect, useState} from 'react'
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

export default function Tile({number,setCount,count}) {
    const [clicked,setClicked] = useState(false);
    function onclick(){
        setClicked(true);
        const intNumber = parseInt(number)
        if(count== intNumber){
            setCount(count+1);
        }
        setInterval(() => {
            setClicked(false);
        }, 200)
    }
    useEffect(() => {
        
      },[count]);
    
    return (
        <TileBox onClick={()=>onclick()} style={{backgroundColor:`${clicked?('gold'):('')}`, transition:`${clicked?('all .5s'):('all .5s')}`}}>
            <div className='text' key={number} >
                <p>{number}</p>
            </div>
        </TileBox>
    )
  }